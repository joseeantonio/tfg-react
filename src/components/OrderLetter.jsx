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
            <Sh1>{producto.precio}</Sh1>
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
`

const Simg = styled.img`
  max-width: 225px;
`

const SFaTrash = styled(FaTrash)`
  font-size:20px;
  margin:10px;
`

const Sbutton = styled.button`
  all:unset;
  cursor:pointer;
  width: 150px;
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Sh1 = styled.h1`
  font-size: 20px;
  width: 150px;
  text-align: center;
  color: black;
  font-family: 'Inter';
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
`

export default OrderLetter