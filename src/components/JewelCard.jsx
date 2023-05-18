import React from "react";
import {Link} from "react-router-dom";
import productos from "../assets/json/productosPrueba.json"
import styled from "styled-components";

const JewelCard = () => {

    const producto = productos.productos[0]

    return(
        <Sdiv>
            <Simg src={producto.url_img}/>
            <Sh1>{producto.nombre}</Sh1>
            <Sh2>{producto.precio} €</Sh2>
            <SLinkContainer>
                <SLink>Añadir al carrito</SLink>
            </SLinkContainer>
        </Sdiv>
    )
}


const Simg = styled.img`
  max-width: 225px;
  margin: 10px;
`

const SLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
`

const SLinkContainer = styled(Link)`
  width: 225px;
  height: 40px;
  background-color: #283747;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 10px 10px;

  &:hover {
    background-color: #213075;
    font-size: 17px;
  }
`

const Sh2 = styled.h2`
  margin: 0px 10px 10px 10px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
`

const Sh1 = styled.h1`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 21px;
  display: flex;
  margin: 0px 10px 10px 10px;
  align-items: center;
  text-align: center;
`

const Sdiv = styled.div`
  width: 250px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px 10px 10px;
  border-radius: 5px;
`

export default JewelCard