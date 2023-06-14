import React from "react";
import styled from "styled-components";
import ProductShoppingCart from "../components/ProductShoppingCart";

// Recibimos por props una lista de productos que se muestran en el carrito y por cada uno crea un componente
// ProductDhoppingCart
const ShoppingCartList = ({pedido,updateOrder}) => {

    return(
        <Sdiv>
            {
                pedido.map((producto,index) => (
                    <ProductShoppingCart
                        producto={producto}
                        updateOrder={updateOrder}
                    />
                ))
            }
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 20px;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  @media (width <= 815px) {
    width: 100%;
  }
`

export default ShoppingCartList