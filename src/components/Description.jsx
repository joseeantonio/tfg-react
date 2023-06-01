import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import styled from "styled-components";

const Description = ({description,width,onClick}) => {


    return (
        <Sdiv width={width}>
            <Sh1>Descripcion</Sh1>
            <Sp>{description}</Sp>
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