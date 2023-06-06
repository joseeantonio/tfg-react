import React from "react";
import styled from "styled-components";

const TitlePage = ({name}) => {
    return(
        <Sh1>{name}</Sh1>
    )
}

const Sh1 = styled.h1`

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  padding: 60px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items:center;
  text-align:center;

  @media ( width <= 450px) {
    font-size:30px;
    padding: 50px;
  }

`
export default TitlePage