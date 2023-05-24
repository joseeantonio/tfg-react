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

    const fetchDataApi = async () => {
        try {
            const result = await petition("http://localhost:8080/productos")
            setJewerly(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchDataApi()
    },[])


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
                margin={"0px 0px 40px 0px"}
            />
            <Sdiv>
                <Filters margin={"0px 0px 40px 0px"} />
                <div>
                    <LinkSectionGroup width={"900px"} />
                    <JewelryList productos={jewerly} width={"900px"} margin={"5px 0 30px 0"} />
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
  justify-content: space-around;
`
export default Jewelry