import React, {useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

// Componente para carta del producto al ver los productos que he pedido en un producto
const ProductOrder = ({width,product,margin}) => {

    useEffect(()=>{
    },[])
    return(
        <SLink to={`/jewel/${product.id}`}>
            <Sdiv width={width} margin={margin}>
                <Simg src={product.url_img}/>
                <Sh1>{product.nombre}</Sh1>
                <Sh2>{product.precio} €</Sh2>
                <Sh3>{product.sexo}</Sh3>
                <Sh3>Cantidad : {product.cantidad}</Sh3>
            </Sdiv>
        </SLink>
    )
}

const Simg = styled.img`
  max-width: 225px;
  margin: 10px;
`

const SLink = styled(Link)`
  all: unset;
  cursor: pointer;
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

export default ProductOrder