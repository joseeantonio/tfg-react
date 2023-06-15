import React, {useEffect, useState} from "react";
import ProductOrder from "../components/ProductOrder";
import styled from "styled-components";
import {petition, petitionWithToken} from "../services/api";

// Le pasamos por props una lista de productos de un pedido y los muestra utilizando el componente
// ProductOrder por cada uno.
const OneOrderList = ({products}) => {
    return(
        <Sdiv>
            {
                products.map((product,index) => (
                    <ProductOrder
                        width={"1200px"}
                        product={product}
                        margin={index === product.length - 1 ? "0 auto" : "0 auto 40px"}
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

export default OneOrderList