import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import Filters from "../modules/Filters";
import Input from "../components/Input";
import styled from "styled-components";
import LinkSectionGroup from "../modules/LinkSectionGroup";
import JewelryList from "../modules/JewelryList";
import {petition} from "../services/api";
import {useTranslation} from "react-i18next";
import ButtonSubmit from "../components/ButtonSubmit";

const Jewelry = () => {

    const [jewerly,setJewerly] = useState([])
    const [filters, setFilters] = useState([]);
    const { t } = useTranslation();

    const [pagination,setPagination] = useState(12)

    const fetchDataApi = async () => {
        try {
            const result = await petition(`/productos/paginacion/${pagination}`)
            setJewerly(result)
        } catch (error) {
            console.log(error)
        }
    }

    const loadMore = () => {
        setPagination(pagination+12)
    }

    useEffect(()=>{
        fetchDataApi()
    },[pagination])
    useEffect(()=>{
        console.log(filters)
    },[filters,setFilters])


    return(
        <Sbody>
            <TitlePage name={t("JOYAS")} />
            <Input
                placeholder={t("Busqueda")}
                type={"search"}
                width={"309.07px"}
                height={"44px"}
                searchIcon={"true"}
                marginBottom={"50px"}
                widthSearch={"51.59px"}
                borderRadius={"5px"}
                margin={"0 auto 40px"}
            />
            <Sdiv>
                <Filters margin={"0px 20px 40px 20px"} filters={filters} setFilters={setFilters} />
                <div>
                    <LinkSectionGroup width={"900px"} margin={"0 auto"} />
                    {
                        filters.length ===0 ? (
                            <>
                                <JewelryList
                                    productos={jewerly}
                                    width={"930px"}
                                    margin={"15px 5px 30px 15px"}
                                />
                                <ButtonSubmit
                                    label={"CARGAR MAS"}
                                    fontSize={"20px"}
                                    padding={"20px"}
                                    onclick={loadMore}
                                    margin={"30px auto"}
                                    color={"white"} width={"20%"}
                                    backgroundColor={"#5A5A5A"}
                                />
                            </>
                        ) : 
                            filters.includes("0 - 50 €") ? (
                                <p>0 a 50 €</p>
                            ) : (
                                <p>pepe</p>
                            )
                    }
                </div>
            </Sdiv>
        </Sbody>
    )
}

const Sbody = styled.body`
  background-color: #DFDFDF;
`

const Sdiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  
  @media (width <= 1175px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`
export default Jewelry