import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import styled from "styled-components";
import img_fondo from "../assets/images/img_fondo_carrito.png"
import {useTranslation} from "react-i18next";
import ShoppingCartList from "../modules/ShoppingCartList";
import {useUserContext} from "../context/UserContext";
import {Link} from "react-router-dom";
import ButtonSubmit from "../components/ButtonSubmit";
import {useShoppingCartContext} from "../context/ShoppingCartContext";

// Pagina de Carrito y utilizamos modulos y componentes
const ShoppingCart = () => {

    const [order,setOrder] = useState([])
    const [price,setPrice] = useState(0)
    const { t } = useTranslation();
    // Cogemos el user y set user del context para almacenar lo que queramos
    const { user, setUser } = useUserContext()
    // Definimos el context de la cantidad para el NavBar
    const { shoppingCart, setShoppingCart } = useShoppingCartContext()

    // Cogemos los datos del localStorage
    const getData = () => {
        const finalOrder = JSON.parse(localStorage.getItem("order")) || [];
        setShoppingCart(finalOrder.length)
        setOrder(finalOrder);
        let price = 0
        for (let i = 0;i < finalOrder.length;i++){
            price += finalOrder[i].cantidad*finalOrder[i].precio
        }
        setPrice(price)
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
            {
                order.length !== 0 ? (
                    <>
                        <ShoppingCartList pedido={order} updateOrder={updateOrder} />
                        <Sh1>IMPORTE TOTAL DEL PEDIDO (iva incluido) :  {price} €</Sh1>
                        {
                            !user ? (
                                <SLink to={"/register"}>IDENTIFIQUISE PARA HACER EL PEDIDO</SLink>
                            ) : (
                                <ButtonSubmit
                                    label={"COMPRAR"}
                                    color={"white"}
                                    fontSize={"18px"}
                                    backgroundColor={"black"}
                                    width={"350px"}
                                    margin={"0px 0px 40px 0px"}
                                />
                            )
                        }
                    </>
                ) : (
                    <Sdiv>
                        <Sh1 className={"empty"}>Ve a ver las joyas para añadirlas</Sh1>
                    </Sdiv>
                )
            }
        </Sbody>
    )
}

const Sbody = styled.body`
  background-color: #DFDFDF;
  min-height: 700px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const SLink = styled(Link)`
  all: unset;
  cursor: pointer;
  color: white;
  font-family: Inter;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 30px;
  background-color: black;
  border-radius: 5px;
  margin-bottom: 40px;
`

const Sdiv = styled.div`
  display: flex;
  justify-content: center;
`

const Sh1 = styled.h1`
  margin: 0;
  padding: 20px 15% 20px 15%;
  margin: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  border-top:1px solid black;
  text-align: center;
  
  &.empty{
    all: unset;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-size: 27px;
    margin: 10px 30px;
    text-align: center;
  }
`
export default ShoppingCart