import React from "react";
import OrderLetter from "../components/OrderLetter";

const OrderList = ({productos}) => {


    return(
        <div>
            {
                productos.map((producto) => (
                    <OrderLetter width={"1200px"} producto={producto} margin={"0 auto"} />
                ))
            }
        </div>
    )
}

export default OrderList