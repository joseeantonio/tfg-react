import React from "react";
import styled from "styled-components";

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
            <Sh1>eliminar</Sh1>
        </Sdiv>
    )
}

const Simg = styled.img`
  max-width: 225px;
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