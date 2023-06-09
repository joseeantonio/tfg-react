import React from "react";
import TitlePage from "../components/TitlePage";
import productos from "../assets/json/productosPrueba.json"
import OrderList from "../modules/OrderList";
import styled from "styled-components";
import img_fondo from "../assets/images/img_fondo_carrito.png"

const Orders = () => {



    return(
        <Sbody>
            <TitlePage name={"PEDIDOS"} />
            <OrderList pedidos={productos.pedidos} padding={"0px 0px 40px 0px"} />
            <Sh1>Tienes {productos.pedidos.length} pedidos realizados.</Sh1>
        </Sbody>
    )
}

const Sh1 = styled.h1`
    margin:0;
    padding: 40px;;
    text-align:center;
    font-family:'Inter';
`

const Sbody = styled.body`
  background-image: url(${img_fondo});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 700px;
`

export default Orders