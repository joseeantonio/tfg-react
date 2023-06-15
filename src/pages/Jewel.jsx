import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import TitlePage from "../components/TitlePage";
import {petition} from "../services/api";
import Description from "../components/Description";
import styled from "styled-components";
import TechnicalInformation from "../modules/TechnicalInformation";
import {useShoppingCartContext} from "../context/ShoppingCartContext";
import {FadeLoader} from "react-spinners";

// Pagina de contacto y utilizamos modulos y componentes
const Jewel = () => {
    // Recogemos el id por la url
    const {id} = useParams()

    // cargando
    const [loading, setLoading] = useState(true)

    // Definimos el context de la cantidad para el NavBar
    const { shoppingCart, setShoppingCart } = useShoppingCartContext()

    const [jewel,setJewel] = useState([])
    const [quantity,setQuantity] = useState(1)

    // Hacemos llamada a la api para coger el producto entero y lo almacenamos en la constante jewel
    const fetchDataApi = async () => {
        try {
            const result = await petition(`/productos/${id}`)
            setJewel(result)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    // Lo añadimos al carrito de la compra por el localStorage, y si ya hay un producto con el mismo id
    // y volvemos a pedir el mismo producto, pero con cantidad 4 se le sumara a la que ya tenia.
    const addOrder = () => {
        // Cogemos el pedido del localStorage
        let order = JSON.parse(localStorage.getItem("order")) || []

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
            // modificamos el context
            setShoppingCart(shoppingCart+1)
        }
        // Guardamos el pedido en el localStorage
        localStorage.setItem('order', JSON.stringify(order))

    }

    // Nada mas se inicie la pagina, haremos la llamada a la api
    useEffect(()=>{
        fetchDataApi()
    },[])

    return(
        <Sbody>
            <TitlePage name={jewel.nombre} />
            {
                loading ? (
                    <Sdiv className={"loading"}>
                        <SFadeLoader
                            color="#000000"
                            margin={16}
                            height={42}
                            width={8}
                        />
                    </Sdiv>
                ) : (
                    <>
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
                    </>
                )
            }
        </Sbody>
    )
}

const Sbody = styled.body`
  min-height: 700px;
`

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
  
  &.loading{
    all: unset;
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const SFadeLoader = styled(FadeLoader)`
  margin: 0 auto;
`


const Simg = styled.img`
  max-width:532px;

  @media (width <= 1170px){
    margin-bottom:30px;
    max-width:500px;
  }
  @media (width <= 600px){
    max-width:300px;
  }
`

export default Jewel