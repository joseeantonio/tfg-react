import React from "react";
import styled from "styled-components";

// Este componente lo utilizo como titulo de un formulario
const TitleForm = ({name}) => {
    return(
            <Sh1>{name}</Sh1>
    )
}

const Sh1 = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  display: flex;
  margin: 0px 20px 0px 3px;
`
export default TitleForm