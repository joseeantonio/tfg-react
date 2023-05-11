import React from "react";
import styled from "styled-components";

const Input = ({label,type,height,width, onChange,placeholder, marginBottom}) => {

    return(
        <Slabel marginBottom={marginBottom}>
            {label && <Sspan>{label}</Sspan>}
            <Sinput type={type} height={height} width={width} placeholder={placeholder} onChange={onChange} />
        </Slabel>
    )

}

const Sinput = styled.input`

  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  width: ${(props) => props.width ? props.width : "100%"};
  height: ${(props) => props.height ? props.height : "100%"};
`


const Sspan = styled.span`

  margin-top: 15px;
  margin-bottom: 15px;
  font-family: 'Inter';
  font-size: 20px;

`

const Slabel = styled.label`

  display: flex;
  flex-direction: column;
  margin: 3px;
  margin-bottom: ${(props) => props.marginBottom};

`

export default Input