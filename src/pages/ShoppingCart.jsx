import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import styled from "styled-components";
import img_fondo from "../assets/images/img_fondo_carrito.png"
import {useTranslation} from "react-i18next";
import ShoppingCartList from "../modules/ShoppingCartList";

// Pagina de Carrito y utilizamos modulos y componentes
const ShoppingCart = () => {

    const [order,setOrder] = useState([])
    const { t } = useTranslation();

    // Cogemos los datos del localStorage
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

const Sbody = styled.body`
  background-image: url(${img_fondo});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 700px;
`
export default ShoppingCart