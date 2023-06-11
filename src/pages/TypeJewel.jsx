import React from "react";
import TitlePage from "../components/TitlePage";
import {useParams} from "react-router-dom";
import Input from "../components/Input";
import Filters from "../modules/Filters";
import LinkSectionGroup from "../modules/LinkSectionGroup";
import JewelryList from "../modules/JewelryList";
import styled from "styled-components";
import productos from "../../src/assets/json/productosPrueba.json"

const TypeJewel = () => {

    const {type} = useParams()
    const jewerly = productos.productos.filter(producto => {
        if (type === "anillos") {
            return producto.tipo === "anillo";
        } else if (type === "collares") {
            return producto.tipo === "collar";
        } else {
            return producto.tipo === "relojes";
        }
    });


    return(
        <Sbody>
            <TitlePage name={type.toUpperCase()} />
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
                <Filters margin={"0px 20px 40px 20px"} />
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