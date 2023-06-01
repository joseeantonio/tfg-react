import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import styled from "styled-components";
import img_fondo from "../assets/images/img_fondo_carrito.png"
import OrderList from "../modules/OrderList";
import {petition} from "../services/api";
import productos from "../assets/json/productosPrueba.json"

const ShoppingCart = () => {

    const [prize,setPrize] = useState(100)
    const [order,setOrder] = useState([])

    const fetchDataApi = async () => {
        try {
            const result = await petition("/pedidos")
            setOrder(result)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchDataApi()
    },[])


    return(
        <Sbody>
            <TitlePage name={"CESTA"} />
            <OrderList productos={productos.productos} padding={"0px 0px 80px 0px"} />
            <Sh1>IMPORTE TOTAL DEL PEDIDO (iva incluido) : {prize}€</Sh1>
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