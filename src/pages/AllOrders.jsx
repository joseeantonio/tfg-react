import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import OrderList from "../modules/OrderList";
import styled from "styled-components";
import {FadeLoader} from "react-spinners";
import {petitionWithToken} from "../services/api";
import img_fondo from "../assets/images/img_fondo_carrito.png"

const AllOrders = () => {

    // cargando
    const [loading, setLoading] = useState(true)
    const [orders,setOrders] = useState([])

    const fetchDataOrders = async () => {
        const list = []
        try {
            const ordersResponse = await petitionWithToken(`/pedidos`,"get")
            for (let i = 0;i < ordersResponse.length;i++) {
                try {
                    console.log(ordersResponse[i])
                    list.push(ordersResponse[i])
                } catch (error) {
                    console.log(error)
                }
            }
            setLoading(false)
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
            <TitlePage name={"TODOS LOSPEDIDOS"} />
            {
                loading ? (
                    <Sdiv className={"loading"}>
                        <SFadeLoader
                            color="#000000"
                            margin={16}
                            height={42}
                            width={8}
                        />
                    </Sdiv>
                ) : (
                    <>
                        <OrderList pedidos={orders} padding={"0px 0px 40px 0px"} all={true} />
                        <Sh1>Hay {orders.length} pedidos realizados.</Sh1>
                    </>
                )
            }
        </Sbody>
    )
}

const Sh1 = styled.h1`
    margin:0;
    padding: 40px;;
    text-align:center;
    font-family:'Inter';
`

const SFadeLoader = styled(FadeLoader)`
  margin: 0 auto;
`

const Sbody = styled.body`
  background-image: url(${img_fondo});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 700px;
`

const Sdiv = styled.div`
  
  &.loading{
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default AllOrders