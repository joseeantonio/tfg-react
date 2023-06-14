import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useUserContext} from "../context/UserContext";
import { BsFillTrash3Fill } from "react-icons/bs";
import {petitionWithToken} from "../services/api";

// Carta del producto en el listado de productos
const JewelCard = ({producto, index}) => {

    // Cogemos el user y set user del context para almacenar lo que queramos
    const { user, setUser } = useUserContext()

    const removeProduct = async () => {
        try {
            const result = await petitionWithToken(`/productos/${producto.id}`, "delete")
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <Sdiv>
            <Simg src={producto.url_img}/>
            <Sh1>{producto.nombre}</Sh1>
            <Sh2>{producto.precio} €</Sh2>
            <SLink to={`/jewel/${producto.id}`}>Añadir al carrito</SLink>
            {
                user && user.admin && (
                    <Sbutton onClick={removeProduct}>
                        <SBsFillTrash3Fill />
                        <span>Eliminar</span>
                    </Sbutton>
                )
            }
        </Sdiv>
    )
}


const Simg = styled.img`
  max-width: 225px;
  margin: 10px;
`

const SBsFillTrash3Fill = styled(BsFillTrash3Fill)`
  margin-right: 5px ;
`

const SLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  width: 225px;
  height: 40px;
  background-color: #283747;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 10px 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #213075;
    font-size: 17px;
  }
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

const Sbutton = styled.button`
  all: unset;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 10px 0px;
  cursor: pointer;
  padding: 5px;
`

export default JewelCard