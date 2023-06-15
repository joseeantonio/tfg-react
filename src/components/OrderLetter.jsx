import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {petitionWithToken} from "../services/api";

// Este componente lo utilizamos para la carta de un pedido
const OrderLetter = ({width,margin,pedido}) => {

    const calculateQuantityProducts = (productos) => {
        let quantity = 0
        for (let i = 0; productos.length>i;i++) {
            quantity += productos[i].cantidad
        }
        return quantity
    }

    return(
        <SLink to={`/oneOrder/${pedido.id}`}>
            <Sdiv width={width} margin={margin}>
                <Sh1 className={"id"}><Slabel>ID :</Slabel> <Sp>{pedido.id}</Sp></Sh1>
                <Sh1 className={"information"}><Slabel>Informacion :</Slabel> <Sp>{pedido.informacion}</Sp></Sh1>
                <Sh1><Slabel>Entrega del pedido</Slabel> : <Sp>{pedido.fech_pedido}</Sp></Sh1>
                <Sh1><Slabel>Productos</Slabel> : <Sp>{calculateQuantityProducts(pedido.productos)}</Sp></Sh1>
            </Sdiv>
        </SLink>
    )
}

const SLink = styled(Link)`
  all: unset;
  cursor: pointer;
`

const Slabel = styled.span`
  font-weight: bold;
  margin: 0;
`

const Sp = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: 'Inter';
  margin: 0;

  @media (width <= 1330px) {
    margin-left:3px;
  }
`

const Sh1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  color: black;
  font-family: 'Inter';
  margin-left: 20px;
  margin-right: 20px;
  
  &.id{
    width: 100px;
  }
  &.information{
    width: 450px;
    height: 70%;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: column;
  }
`

const Sdiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background-color:white;
  width: ${(props) => props.width && props.width};
  margin: ${(props) => props.margin && props.margin};
  border-radius:5px;
`

export default OrderLetter