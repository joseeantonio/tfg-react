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
  margin: 60px;
  display: flex;
  justify-content: center;

`
export default TitlePage