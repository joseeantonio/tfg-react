import React from "react";
import ProductOrder from "../components/ProductOrder";
import styled from "styled-components";
import ProductShoppingCart from "../components/ProductShoppingCart";

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