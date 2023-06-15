import React, {useState} from "react";
import OrderLetter from "../components/OrderLetter";
import styled from "styled-components";

// Le pasamos una lista de pedidos y por cada uno utiliza el componente OrderLetter
const OrderList = ({pedidos,padding,all}) => {

    return(
        <Sdiv padding={padding}>
            {
                pedidos.map((pedido,index) => (
                    <OrderLetter
                        all={all}
                        width={"1200px"}
                        pedido={pedido}
                        margin={index === pedidos.length - 1 ? "0 auto" : "0 auto 40px"}
                    />
                ))
            }
        </Sdiv>
    )
}

const Sdiv = styled.div`
  padding: ${(props) => props.padding && props.padding};
  border-bottom: ${(props) => props.padding && "1px solid black"};

  @media (width <= 1222px){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`

export default OrderList