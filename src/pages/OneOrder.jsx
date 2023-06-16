import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import img_fondo from "../assets/images/img_fondo_carrito.png"
import styled from "styled-components";
import OneOrderList from "../modules/OneOrderList";
import {useParams} from "react-router-dom";
import {petition, petitionWithToken} from "../services/api";
import {FadeLoader} from "react-spinners";
import {useUserContext} from "../context/UserContext";

// Pagina de Un pedido en concreto y utilizamos modulos y componentes
const OneOrder = () => {

    // Recogemos el id por la url
    const {id} = useParams()
    // cargando
    const [loading, setLoading] = useState(true)
    const [order,setOrder] = useState([])
    const [products,setProducts] = useState([])
    // Cogemos el user y set user del context para almacenar lo que queramos
    const { user, setUser } = useUserContext()
    const fetchDataOrders = async () => {
        try {
            const resultOrder = await petitionWithToken(`/pedidos/${id}`,"get")
            const list = []
            try {
                for (let i = 0; i < resultOrder.productos.length; i++) {
                    try {
                        const resultProducts = await petitionWithToken(`/productos/${resultOrder.productos[i].id}`, "get")
                        resultProducts.cantidad = resultOrder.productos[i].cantidad
                        list.push(resultProducts)
                    } catch (error) {
                        console.log(error)
                    }
                }
                setProducts(list)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchDataOrders()
    },[])

    useEffect(()=>{
    },[order])

    return(
        <Sbody>
            <TitlePage name={`PEDIDO : ${id}`} />
            {
                user.admin && (
                    <Sh1>(Relizado por ti)</Sh1>
                )
            }
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
                    <OneOrderList products={products} />
                )
            }
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

const Sh1 = styled.h1`
  font-size: 17px;
  font-family: 'Inter';
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
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

const SFadeLoader = styled(FadeLoader)`
  margin: 0 auto;
`

export default OneOrder