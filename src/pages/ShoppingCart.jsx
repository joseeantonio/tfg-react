import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import styled from "styled-components";
import img_fondo from "../assets/images/img_fondo_carrito.png"
import OrderList from "../modules/OrderList";
import {petition} from "../services/api";
import productos from "../assets/json/productosPrueba.json"
import {useTranslation} from "react-i18next";
import OneOrderList from "../modules/OneOrderList";
import ShoppingCartList from "../modules/ShoppingCartList";

const ShoppingCart = () => {

    const [order,setOrder] = useState([])
    const { t } = useTranslation();

    const getData = () => {
        const finalOrder = JSON.parse(localStorage.getItem("order")) || [];
        setOrder(finalOrder);
    }

    const updateOrder = () => {
        getData();
    }

    useEffect(()=>{
        getData()
    },[])


    return(
        <Sbody>
            <TitlePage name={t("CESTA")} />
            <ShoppingCartList pedido={order} updateOrder={updateOrder} />
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
export default ShoppingCart