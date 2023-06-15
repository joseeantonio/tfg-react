import React from "react";
import styled from "styled-components";
import ButtonSubmit from "../components/ButtonSubmit";
import img_fondo from "../assets/images/img_error.png"

const NotFound = () => {

    return (
        <Sdiv>
            <Sdiv className={"container"}>
                <Sh1>Hubo un error</Sh1>
                <Sp>Lo sentimos, ha habido un error en la pagina, intentelo de nuevo.</Sp>
                <ButtonSubmit
                    label={"Recargar página"}
                    border={"1px solid black"}
                    borderRadius={"5px"}
                    fontSize={"20px"}
                    width={"250px"}
                    backgroundColor={"#283747"}
                    color={"White"}
                    onclick={() => window.location.reload()}
                />
            </Sdiv>
        </Sdiv>
    );
}
const Sdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-image: url(${img_fondo});
  background-size: cover;
  background-position: center;
  
  &.container{
    all: unset;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
`

const Sh1 = styled.h1`
  font-size: 36px;
  font-family: Inter;
  margin-bottom: 20px;
  color: #283747;
`

const Sp = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`

export default NotFound