import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import styled from "styled-components";
import img_fondo from "../assets/images/img_fondo_carrito.png"
import OrderList from "../modules/OrderList";
import {petition} from "../services/api";

const ShoppingCart = () => {


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
            {/*<TitlePage name={"CESTA"} />*/}
            {/*<OrderList productos={} />*/}
        </Sbody>
    )
}

const Sbody = styled.body`
  background-image: url(${img_fondo});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 700px;
`
export default ShoppingCart