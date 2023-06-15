import React, {useEffect, useState} from "react";
import ProductOrder from "../components/ProductOrder";
import styled from "styled-components";
import {petition, petitionWithToken} from "../services/api";

// Le pasamos por props una lista de productos de un pedido y los muestra utilizando el componente
// ProductOrder por cada uno.
const OneOrderList = ({pedido}) => {

    // const [products,setProducts] = useState([])
    //
    // const fetchData = async () => {
    //     const list = []
    //     try {
    //         for (let i = 0; i < pedido.productos.length; i++) {
    //             try {
    //                 const result = await petitionWithToken(`/productos/${pedido.productos[i].id}`, "get")
    //                 result.cantidad = pedido.productos[i].cantidad
    //                 list.push(result)
    //             } catch (error) {
    //                 console.log(error)
    //             }
    //         }
    //         console.log(list)
    //         setProducts(list)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    //
    // useEffect(() => {
    //     fetchData()
    // },[])


    //
    // const fetchDataOrders = async () => {
    //     try {
    //         const result = await petition(`/pedidos/${id}`)
    //         setOrder(result)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    return(
        <Sdiv>
            {
                pedido.map((producto,index) => (
                    <ProductOrder
                        width={"1200px"}
                        producto={producto}
                        margin={index === pedido.length - 1 ? "0 auto" : "0 auto 40px"}
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