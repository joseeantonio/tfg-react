import React from "react";
import styled from "styled-components";
import img_fondo from "../assets/images/img_fondo_home.jpg"
import {Link} from "react-router-dom";
import img_portada_collares from "../assets/images/img_portada_collares.jpg";
import img_portada_relojes from "../assets/images/img_portada_relojes.jpg";
import img_portada_anillos from "../assets/images/img_portada_anillos.jpg";
import ImgSeccion from "../components/ImgSeccion";

const Home = () => {

    return(
        <Sbody>
            <Scontainer>
                <SimgHome src={img_fondo}/>
                <Sh1 className="text-img">Creamos sonrisas cuando te damos nuestras joyas</Sh1>
            </Scontainer>
            <SdivContenedor>
                <ImgSeccion name="Ver Collares" img={img_portada_collares} />
                <ImgSeccion name="Ver Relojes" img={img_portada_relojes} />
                <ImgSeccion name="Ver Collares" img={img_portada_anillos} />
            </SdivContenedor>
            <SLink><Sdiv><Sh1>Todas las joyas</Sh1></Sdiv></SLink>
        </Sbody>
    )
}

const Sbody = styled.body`
  min-height: 700px;
`

const Scontainer = styled.div`

  position: relative;

`



const Sh1 = styled.h1`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 25px;
  
  &.text-img{
    position: absolute;
    top: 40%;
    left: 10%;
    width: 415px;
    height: 186px;
    font-family: "Simonetta";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    display: flex;
    align-items: center;
    text-align: center;

  }
`

const Simg = styled.img`
  width: 302px;
  height: 218px;
`

const SimgHome = styled.img`
  width: 100%;
  height: 598px;
  margin-bottom: 80px;
`

const Sdiv = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  width: 373px;
  height: 53px;
  margin: 0 auto 40px;

  border: 1px solid #000000;
  border-radius: 5px;

`


const SdivContenedor = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 40px;
`

const SdivCarta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: 'Inter';
  font-size: 20px;
  padding: 10px;
`

export default Home