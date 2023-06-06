import React, { useState } from "react";
import styled from "styled-components";

const Checkbox = ({label,marginBottom,fontSize,onChange}) => {

  const handleChecked = (event) => {
    const checked = event.target.checked
    onChange(label, checked)
  }

    return(
        <Slabel htmlFor={label} marginBottom={marginBottom}>
            <Sinput type={"checkbox"} onChange={handleChecked} />
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
  cursor: pointer;
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
