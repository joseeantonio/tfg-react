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
        let order = []
        if (JSON.parse(localStorage.getItem('order'))){
            order = JSON.parse(localStorage.getItem('order'))
        }

        let isInOrder = null
        for (let i=0;i<order.length;i++){
            if (order[i].id === jewel.id){
                isInOrder = true
            }
        }

        let finalOrder = []
        if (isInOrder){
            for (let i=0;i<order.length;i++){
                if (order[i].id !== jewel.id){
                    finalOrder.push(order[i].id)
                }
            }
            localStorage.setItem('favoritos', JSON.stringify(finalOrder))
        }else{
            order.push(jewel)
            localStorage.setItem('favoritos', JSON.stringify(order))
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
            <TechnicalInformation jewel={jewel} margin={"40px auto"} width={"1130px"} />
        </body>
    )
}

const Sdiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1130px;
`

const Simg = styled.img`
  height: 372px;
  width: 532px;
`

export default Jewel