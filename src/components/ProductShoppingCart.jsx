import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import Quantity from "./Quantity";

// Carta producto que utilizamos en el carrito que todavia no hemos pedido
const ProductShoppingCart = ({width,producto,margin,updateOrder}) => {

    // Podemos modificar la cantidad, porque todavia no esta pedido y se almacena el pedido en el LocalStorage
    const [quantity,setQuantity] = useState(producto.cantidad)

    const updatedQuantity = () => {
        // Copiamos el producto para que no de problemas
        const updatedProduct = { ...producto,};
        //añadimos la cantidad actual
        updatedProduct.cantidad = quantity
        const order = JSON.parse(localStorage.getItem("order"));
        // Recorremos el pedido del localStorage y cambiamos el que hemos modificado y con los otros no lo tocamos.
        const updatedOrder = order.map((product) =>
            product.id === producto.id ? updatedProduct : product
        );
        // Guardamos el pedido actualizado
        localStorage.setItem("order", JSON.stringify(updatedOrder));
    }

    // Eliminamos el producto del carrito
    const removeJewel = () => {
        // Cogemos la lista del localStorage
        const order = JSON.parse(localStorage.getItem("order"));

        // Recorremos el pedido y si el id no es igual, lo guardamos en la variable
        const updatedOrder = order.filter(item => item.id !== producto.id);


        // Actualizar el localStorage con la lista filtrada
        localStorage.setItem('order', JSON.stringify(updatedOrder));
        // Esta funcion la utilizamos para recargar la pagina del carrito y se vea el carrito sin el producto eliminado.
        updateOrder();
    }

    // Cada vez que se modifique la cantidad, se actualizara el componente
    useEffect(()=>{
        updatedQuantity()
    },[quantity])

    return(
        <Sdiv width={width} margin={margin}>
            <Simg src={producto.url_img}/>
            <Sh1>{producto.nombre}</Sh1>
            <Sh2>{producto.precio} €</Sh2>
            <Sh3>{producto.sexo}</Sh3>
            <Quantity quantity={quantity} margin={"0px 10px 10px 10px"} setQuantity={setQuantity} />
            <Sbutton onClick={removeJewel}>
                <SFaTrash/>
                <Sp>Eliminar</Sp>
            </Sbutton>
        </Sdiv>
    )
}

const Sbutton = styled.button`
  all:unset;
  cursor:pointer;
  width: 150px;
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
`

const Sp = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: 'Inter';
  margin: 0;

  @media (width <= 1330px) {
    margin-left:3px;
  }
`

const SFaTrash = styled(FaTrash)`
  font-size:20px;
  margin:10px;
  text-align: center;
`

const Simg = styled.img`
  max-width: 225px;
  margin: 10px;
`

const Sh3 = styled.h3`
  margin: 0px 10px 10px 10px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
`

const Sh2 = styled.h2`
  margin: 0px 10px 10px 10px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
`

const Sh1 = styled.h1`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 21px;
  display: flex;
  margin: 0px 10px 10px 10px;
  align-items: center;
  text-align: center;
`

const Sdiv = styled.div`
  width: 250px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 25px 10px 10px 10px;
  border-radius: 5px;
`

export default ProductShoppingCart