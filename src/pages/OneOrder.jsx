import React from "react";
import TitlePage from "../components/TitlePage";
import productos from "../assets/json/productosPrueba.json"
import JewelryList from "../modules/JewelryList";
import img_fondo from "../assets/images/img_fondo_carrito.png"
import styled from "styled-components";
import OneOrderList from "../modules/OneOrderList";

const OneOrder = () => {


    return(
        <Sbody>
            <TitlePage name={"PEDIDO TAL"} />
            <OneOrderList pedido={productos.productosPedidos} />
        </Sbody>
    )
}


const Sbody = styled.body`
  background-image: url(${img_fondo});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 700px;
`
export default OneOrder