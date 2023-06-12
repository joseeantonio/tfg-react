import React from "react";
import styled from "styled-components";
import {BsSearch} from "react-icons/bs";


const Input = ({fontSize,label,defaultValue,type,height,width, onChange,placeholder, margin,searchIcon,widthSearch,borderRadius,error,name,onClick}) => {

    return(
        <Slabel margin={margin} searchIcon={searchIcon} width={width}>
            {label && <Sspan>{label}</Sspan>}
            <Sinput fontSize={fontSize} type={type} defaultValue={defaultValue} height={height} width={width} placeholder={placeholder} onChange={onChange} borderRadius={borderRadius} name={name} />
            {
                searchIcon && (
                    <Sbutton onClick={onClick} widthSearch={widthSearch} height={height} borderRadius={borderRadius}>
                        <BsSearch />
                    </Sbutton>
                )
            }
            {error && <Sdiv>{error}</Sdiv>}
        </Slabel>
    )
}

const Sinput = styled.input`
  background-color: white;
  border: 1px solid black;
  font-size: ${(props) => props.fontSize && props.fontSize};
  height: ${(props) => props.height ? props.height : "100%"};

  ${(props) =>
          props.searchIcon ? `
      border-radius: ${props.borderRadius} 0px 0px ${props.borderRadius};
    ` : `border-radius: ${props.borderRadius}`}
`

const Sdiv = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`

const Sbutton = styled.button`
  height: ${(props) => props.height};
  width: ${(props) => props.widthSearch};
  background-color: white;
  border-radius: 0px ${(props) => props.borderRadius} ${(props) => props.borderRadius} 0px;
  cursor: pointer;
`

const Sspan = styled.span`

  margin-top: 15px;
  margin-bottom: 15px;
  font-family: 'Inter';
  font-size: 20px;

`

const Slabel = styled.label`

  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${(props) => props.width ? props.width : "100%"};
  margin: ${(props) => props.margin ? props.margin : "3px"};

  ${(props) =>
          props.searchIcon && `
      display: flex;
      flex-direction: row;
    `}
`

export default Input