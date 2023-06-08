import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ImgSeccion = (props) => {
    return(
        <SLink to={props.route}>
            <Sdiv>
                <Simg src={props.img} alt=""/>
                <Sh1>> {props.name}</Sh1>
            </Sdiv>
        </SLink>
    )

}
export default ImgSeccion


const Sdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  @media (width <= 1006px){
    margin: 30px 0;
  }
`

const SLink = styled(Link)`
  all: unset;
    cursor: pointer;
`

const Simg = styled.img`
  width: 302px;
  height: 218px;
`

const Sh1 = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  width: 105px;
  height: 26px;
  background-color: white;
  position: absolute;
  display: flex;
  align-items: center;
  top: 70%;
  margin-left: -93px;
  transform: translate(-50%, -50%);
`