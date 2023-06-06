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

    const fetchDataApi = async () => {
        try {
            const result = await petition(`/productos/${id}`)
            setJewel(result)
        } catch (error) {
            console.log(error)
        }
    }

    const addOrder = () => {
        let order = JSON.parse(localStorage.getItem("order")) || [];

        let isInOrder = null
        for (let i=0;i<order.length;i++){
            if (order[i].id === jewel.id){
                isInOrder = true
            }
        }

        let finalOrder = []
        if (isInOrder){
            finalOrder = order.filter(item => item.id !== jewel.id);
            localStorage.setItem('order', JSON.stringify(finalOrder));
        }else{
            order.push(jewel)
            localStorage.setItem('order', JSON.stringify(order))
        }

    }

    useEffect(()=>{
        fetchDataApi()
    },[])


    return(
        <body>
            <TitlePage name={jewel.nombre} />
            <Sdiv>
                <Simg src={jewel.url_img}/>
                <Description description={jewel.descripcion} width={"500px"} onClick={addOrder} />
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