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
    const [filters, setFilters] = useState([])
    const [filterJewels,setFilterJewels] = useState([])
    const { t } = useTranslation()

    const [pagination,setPagination] = useState(12)

    const fetchDataApi = async () => {
        try {
            const result = await petition(`/productos/paginacion/${pagination}`)
            setJewerly(result)
        } catch (error) {
            console.log(error)
        }
    }

    //Comprobamos si esta cada opcion en la lista de filtros y añadimos los filtros con esas opciones
    // a la una lista en variable y cuando acabe de recorrerlo le da el valor a la lista de productos filtrados.
    const activeFilters = () => {
        let filterProducts = jewerly.filter((jewel) =>
            (filters.includes("0 - 50 €") && jewel.precio >= 0 && jewel.precio <= 50) ||
            (filters.includes("51 - 100 €") && jewel.precio >= 51 && jewel.precio <= 100) ||
            (filters.includes("101 - 150 €") && jewel.precio >= 101 && jewel.precio <= 150) ||
            (filters.includes("Mujer") && jewel.sexo === "Mujer") ||
            (filters.includes("Hombre") && jewel.sexo === "Hombre") ||
            (filters.includes("Unisex") && jewel.sexo === "Unisex")
        )
        setFilterJewels(filterProducts)
    }

    const loadMore = () => {
        setPagination(pagination+12)
    }

    useEffect(()=>{
        fetchDataApi()
    },[pagination])

    //Cada vez que se añada algo a la lista de filtros se ejecuta la funcion
    useEffect(()=>{
        activeFilters()
    },[filters])


    return(
        <Sbody>
            <TitlePage name={t("JOYAS")} />
            <Input
                placeholder={t("Busqueda")}
                type={"search"}
                width={"200px"}
                height={"44px"}
                searchIcon={"true"}
                marginBottom={"50px"}
                widthSearch={"51.59px"}
                borderRadius={"5px"}
                margin={"0 auto 40px"} fontSize={"17px"}
            />
            <Sdiv>
                <Filters margin={"0px 20px 40px 20px"} filters={filters} setFilters={setFilters} />
                <div>
                    <LinkSectionGroup width={"900px"} margin={"15px 0px 0px 15px"} />
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
                        ) : (
                            <JewelryList
                                productos={filterJewels}
                                width={"930px"}
                                margin={"15px 5px 30px 15px"}
                            />
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