import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import productos from "../assets/json/productosPrueba.json"
import OrderList from "../modules/OrderList";
import styled from "styled-components";
import img_fondo from "../assets/images/img_fondo_carrito.png"
import {petition, petitionWithToken} from "../services/api";
import {useUserContext} from "../context/UserContext";

// Pagina de Pedidos y utilizamos modulos y componentes
const Orders = () => {

    // Cogemos el user y set user del context para almacenar lo que queramos
    const { user, setUser } = useUserContext()

    const [orders,setOrders] = useState([])
    const fetchDataOrders = async () => {
        const list = []
        try {
            const ordersResponse = await petitionWithToken(`/clientes/${user.id}`,"get")
            for (let i = 0;i < ordersResponse.pedidos.length;i++) {
                try {
                    console.log(ordersResponse[i])
                    const result = await petitionWithToken(`/pedidos/${ordersResponse.pedidos[i]}`, "get")
                    list.push(result)
                } catch (error) {
                    console.log(error)
                }
            }
            setOrders(list)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDataOrders()
    },[])

    return(
        <Sbody>
            <TitlePage name={"PEDIDOS"} />
            <OrderList pedidos={orders} padding={"0px 0px 40px 0px"} />
            <Sh1>Tienes {orders.length} pedidos realizados.</Sh1>
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