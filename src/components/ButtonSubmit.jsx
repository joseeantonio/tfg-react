import React from "react";
import styled from "styled-components";

const ButtonSubmit = ({label,onclick,color,backgroundColor,margin,padding,height,width,borderRadius,fontSize,type}) => {
    return(
        <Sbutton
            type={type ? type : "submit"}
            color={color}
            onClick={onclick}
            backgroundColor={backgroundColor}
            margin={margin}
            padding={padding}
            height={height}
            width={width}
            borderRadius={borderRadius}
        >
            {
                label &&
                <Sspan fontSize={fontSize}>{label}</Sspan>
            }
        </Sbutton>
    )
}


const Sbutton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width ? props.width : "504px"};
  height: 37px;
  margin: 0 auto;
  border-radius: ${(props) => props.borderRadius ? props.borderRadius : "5px"};
  cursor: pointer;
`

const Sspan = styled.span`
  font-family: 'Inter';
  font-weight: 700;
  font-size: ${(props) => props.fontSize ? props.fontSize : "20px"};
`


export default ButtonSubmit