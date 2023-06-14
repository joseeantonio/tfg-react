import React from "react";
import styled from "styled-components";
import ButtonSubmit from "./ButtonSubmit";
import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";

// Componente que muestra la cantidad y se puede cambiar con un + y un -
const Quantity = ({setQuantity,quantity, margin}) => {

    // Funcion que hace que sea mas cantidad
    const incrementQuantity = () => {
        setQuantity(quantity + 1)
      }

    // Funcion que hace que sea mas cantidad
    const decrementQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1)
        }
    }

    return(
        <Sdiv margin={margin}>
            <ButtonSubmit onclick={decrementQuantity} label={<VscChromeMinimize/>} fontSize={"15px"} border={"1px solid black"} height={"20px"} width={"20px"}  />
            <Sspan>{quantity}</Sspan>
            <ButtonSubmit onclick={incrementQuantity} label={<VscAdd/>} fontSize={"15px"} border={"1px solid black"} height={"20px"} width={"20px"}  />
        </Sdiv>
    )
}

const Sdiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:baseline;
    margin: ${(props) => props.margin && props.margin};
`

const Sspan = styled.span`
    display:flex;
    justify-content:center;
    margin-right:5px;
    margin-left:5px;
    font-size:25px
`

export default Quantity