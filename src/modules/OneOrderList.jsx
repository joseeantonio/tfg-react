import React from "react";
import OrderLetter from "../components/OrderLetter";
import ProductOrder from "../components/ProductOrder";
import styled from "styled-components";

const OneOrderList = ({pedido}) => {


    return(
        <Sdiv>
            {
                pedido.map((producto,index) => (
                    <ProductOrder width={"1200px"}
                                 producto={producto}
                                 margin={index === pedido.length - 1 ? "0 auto" : "0 auto 40px"} />
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