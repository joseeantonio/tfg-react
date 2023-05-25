import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import styled from "styled-components";

const Description = ({description}) => {


    return (
        <Sdiv>
            <h1>Descripcion</h1>
            <p>{description}</p>
            <ButtonSubmit label={"Añadir al carrito"}
                          width={"225px"}
                          color={"white"}
                          height={"40px"}
                          backgroundColor={"#283747"}
                          fontSize={"18px"}
                          borderRadius={"0px"}
                          margin={"10px"}
            />
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export default Description