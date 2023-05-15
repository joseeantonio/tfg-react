import React, {useState} from "react";
import styled from "styled-components";

const Checkbox = ({label,onClick,marginBottom,fontSize}) => {


    return(
        <Slabel htmlFor={label} marginBottom={marginBottom}>
            <Sinput type={"checkbox"} onClick={onClick} />
            {
                label && <Sspan fontSize={fontSize}>{label}</Sspan>
            }
        </Slabel>
    )
}


const Slabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.marginBottom || "0px"};
`

const Sinput = styled.input`
  margin: 10px;
`

const Sspan = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.fontSize}; 
  //15px
  align-items: center;
`

export default Checkbox