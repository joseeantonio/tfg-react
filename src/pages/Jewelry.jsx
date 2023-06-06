import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import Filters from "../modules/Filters";
import Input from "../components/Input";
import styled from "styled-components";
import LinkSectionGroup from "../modules/LinkSectionGroup";
import JewelryList from "../modules/JewelryList";
import {petition} from "../services/api";

const Jewelry = () => {

    const [jewerly,setJewerly] = useState([])
    const [filters, setFilters] = useState([]);

    const fetchDataApi = async () => {
        try {
            const result = await petition("/productos")
            setJewerly(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchDataApi()
    },[])
    useEffect(()=>{
        console.log(filters)
    },[filters,setFilters])


    return(
        <Sbody>
            <TitlePage name={"JOYAS"} />
            <Input
                placeholder={"Busqueda"}
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
                <Filters margin={"0px 0px 40px 0px"} filters={filters} setFilters={setFilters} />
                <div>
                    <LinkSectionGroup width={"900px"} />
                    {
                        filters.length ===0 ? (
                            <JewelryList productos={jewerly} width={"900px"} margin={"5px 0 30px 0"} />
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
`
export default Jewelry