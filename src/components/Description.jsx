import React, { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";
import styled from "styled-components";
import Quantity from "./Quantity";

const Description = ({description,width,onClick}) => {

  const [quantity,setQuantity] = useState(1)

    return (
        <Sdiv width={width}>
            <Sh1>Descripcion</Sh1>
            <Sp>{description}</Sp>
            <Quantity 
              quantity={quantity} 
              setQuantity={setQuantity} 
              margin={"0px 0px 20px 0px"}
            />
            <ButtonSubmit label={"Añadir al carrito"}
                          width={"225px"}
                          color={"white"}
                          height={"40px"}
                          backgroundColor={"#283747"}
                          fontSize={"18px"}
                          borderRadius={"0px"}
                          margin={"10px"}
                          onclick={onClick}
            />
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width};

  @media (width <= 1170px){
    max-width:500px;
    text-align:center
  }
  @media (width <= 600px){
    max-width:300px;
  }
`

const Sh1 = styled.h1`
  margin-top: 0px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
`

const Sp = styled.p`
  margin-bottom: 40px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
`
export default Description