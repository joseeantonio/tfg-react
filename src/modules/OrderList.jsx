import React from "react";
import OrderLetter from "../components/OrderLetter";
import styled from "styled-components";

const OrderList = ({productos,padding}) => {


    return(
        <Sdiv padding={padding}>
            {
                productos.map((producto,index) => (
                    <OrderLetter width={"1200px"} 
                    producto={producto} 
                    margin={index === productos.length - 1 ? "0 auto" : "0 auto 80px"} />
                ))
            }
        </Sdiv>
    )
}

const Sdiv = styled.div`
    padding: ${(props) => props.padding && props.padding};
`

export default OrderList