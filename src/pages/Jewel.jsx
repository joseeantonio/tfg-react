import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import TitlePage from "../components/TitlePage";
import {petition} from "../services/api";
import Description from "../components/Description";
import styled from "styled-components";
import TechnicalInformation from "../modules/TechnicalInformation";

const Jewel = () => {
    const {id} = useParams()

    const [jewel,setJewel] = useState([])
    const [quantity,setQuantity] = useState(1)

    const fetchDataApi = async () => {
        try {
            const result = await petition(`/productos/${id}`)
            setJewel(result)
        } catch (error) {
            console.log(error)
        }
    }

    const addOrder = () => {

        // Cogemos el pedido del localStorage
        let order = JSON.parse(localStorage.getItem("order")) || [];

        // Comprobamos si existe en el pedido
        let isInOrder = order.find(product => product.id === jewel.id)

        // Si esta en el pedido, le sumamos la cantidad a la que tiene
        if (isInOrder){
            isInOrder.cantidad += quantity
        }
        // Si no esta en el pedido le añadimos la cantidad
        else{
            jewel.cantidad = quantity;
            order.push(jewel);
        }
        // Guardamos el pedido en el localStorage
        localStorage.setItem('order', JSON.stringify(order));

    }

    useEffect(()=>{
        fetchDataApi()
    },[])


    return(
        <body>
            <TitlePage name={jewel.nombre} />
            <Sdiv>
                <Simg src={jewel.url_img}/>
                <Description
                    description={jewel.descripcion}
                    width={"500px"}
                    onClick={addOrder}
                    setQuantity={setQuantity}
                    quantity={quantity}
                />
            </Sdiv>
            <TechnicalInformation jewel={jewel} margin={"40px auto"} width={"90%"} />
        </body>
    )
}

const Sdiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;

  @media (width <= 1170px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`

const Simg = styled.img`
  max-width:532px;

  @media (width <= 1170px){
    margin-bottom:30px;
    max-width:500px;
  }
  @media (width <= 600px){
    max-width:30px;
  }
`

export default Jewel