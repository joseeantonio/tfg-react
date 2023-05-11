import React from "react";
import styled from "styled-components";

const ImgSeccion = (props) => {
    return(
        <Sdiv>
            <Simg src={props.img} alt=""/>
            <Sh1>> {props.name}</Sh1>
        </Sdiv>
    )

}
export default ImgSeccion


const Sdiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  left: 52.4px ;
  transform: translate(-50%, -50%);
`