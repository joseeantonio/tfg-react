import React from "react";
import OrderLetter from "../components/OrderLetter";
import styled from "styled-components";

const OrderList = ({pedidos,padding}) => {


    return(
        <Sdiv padding={padding}>
            {
                pedidos.map((pedido,index) => (
                    <OrderLetter width={"1200px"} 
                    pedido={pedido}
                    margin={index === pedidos.length - 1 ? "0 auto" : "0 auto 40px"} />
                ))
            }
        </Sdiv>
    )
}

const Sdiv = styled.div`
    padding: ${(props) => props.padding && props.padding};
    border-bottom: ${(props) => props.padding && "1px solid black"};
  
    //@media (width <= 1330px) {
    //  display: flex;
    //  flex-wrap: wrap;
    //  justify-content: space-evenly;
    //  align-items: center;
    //  padding: 0px;
    //}
`

export default OrderList