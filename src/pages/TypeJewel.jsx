import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import {useParams} from "react-router-dom";
import Input from "../components/Input";
import Filters from "../modules/Filters";
import LinkSectionGroup from "../modules/LinkSectionGroup";
import JewelryList from "../modules/JewelryList";
import styled from "styled-components";
import productos from "../../src/assets/json/productosPrueba.json"
import {useTranslation} from "react-i18next";
import {petition} from "../services/api";
import pluralize from 'pluralize';

const TypeJewel = () => {

    const {type} = useParams()


    const [title,setTitle] = useState()
    const [jewerly,setJewerly] = useState([])
    const [filters, setFilters] = useState([]);
    const { t } = useTranslation();


    const plural = () => {
        if (type === "anillo") {
            setTitle("ANILLOS")
        }else if (type === "collar") {
            setTitle("COLLARES")
        }else{
            setTitle("RELOJES")
        }
    }

    const fetchDataApi = async () => {
        try {
            const result = await petition(`/productos/tipo/${type}`)
            setJewerly(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchDataApi()
        plural()
    },[])
    useEffect(()=>{
        console.log(filters)
    },[filters,setFilters])


    return(
        <Sbody>
            <TitlePage name={title} />
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
                <Filters margin={"0px 20px 40px 20px"}   />
                <JewelryList productos={jewerly} width={"100%"} margin={"5px 0 30px 0"} />
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
  
  @media (width <= 815px) {
    flex-direction: column;
  }
`

export default TypeJewel