import React from "react";
import styled from "styled-components";

const ButtonSubmit = ({label,onclick,color,backgroundColor,margin,padding,height,width,borderRadius,fontSize,type,border}) => {
    return(
        <Sbutton
            type={type ? type : "submit"}
            color={color}
            border={border}
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
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width ? props.width : "50%"};
  height: ${(props) => props.height ? props.height : "37px"};
  margin: ${(props) => props.margin ? props.margin : "0 auto"};
  border-radius: ${(props) => props.borderRadius ? props.borderRadius : "5px"};
  border: ${(props) => props.border && props.border};
  cursor: pointer;

`

const Sspan = styled.span`
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: 'Inter';
  font-weight: 700;
  height:100%;
  font-size: ${(props) => props.fontSize ? props.fontSize : "20px"};

  @media (width <= 550px) {
    font-size: 12px;
  }
`


export default ButtonSubmit