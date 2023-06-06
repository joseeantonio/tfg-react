import React from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

const OrderLetter = ({width,margin,producto}) => {

    const calculateDeliveryDate = () => {
        const currentDate = new Date()

        currentDate.setDate(currentDate.getDate() + 5)

        const newDay = currentDate.getDay()
        const newMonth = currentDate.getMonth() +1
        const newYear = currentDate.getFullYear()

        return `${newDay}/${newMonth}/${newYear}`
    }

    const deliveryDate = calculateDeliveryDate()

    return(
        <Sdiv width={width} margin={margin}>
            <Simg src={producto.url_img}></Simg>
            <Sh1>{producto.nombre}</Sh1>
            <Sh1>{producto.talla}</Sh1>
            <Sh1>Entrega el: {deliveryDate}</Sh1>
            <Sh1>{producto.precio} €</Sh1>
            <Sbutton>
              <SFaTrash/>
              <Sp>Eliminar</Sp>
            </Sbutton>
        </Sdiv>
    )
}

const Sp = styled.p`
  margin:10px;
  font-family: 'Inter';

  @media (width <= 1330px) {
    margin-left:3px;
  }
`

const Simg = styled.img`
  max-width: 225px;

  @media (width <= 1330px) {
    padding-top: 20px;
    max-width: 250px;
  }
`

const SFaTrash = styled(FaTrash)`
  font-size:20px;
  margin:10px;


  @media (width <= 1330px) {
    margin-right:3px;
  }
`

const Sbutton = styled.button`
  all:unset;
  cursor:pointer;
  width: 150px;
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;

  @media (width <= 1330px) {
    flex-direction:row;
    justify-content:center;
  }
`

const Sh1 = styled.h1`
  font-size: 20px;
  width: 150px;
  text-align: center;
  color: black;
  font-family: 'Inter';

  @media (width <= 1330px) {
    width: 250px;
  }
`

const Sdiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background-color:white;
  width: ${(props) => props.width && props.width};
  margin: ${(props) => props.margin && props.margin};
  border-radius:5px;
  
  @media (width <= 1330px) {
    margin: 0 20px 50px;
    flex-direction: column;
    height: 500px;
    width: 330px;
  }
`

export default OrderLetter