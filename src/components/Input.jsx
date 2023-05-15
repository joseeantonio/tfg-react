import React from "react";
import styled from "styled-components";
import {BsSearch} from "react-icons/bs";


const Input = ({label,type,height,width, onChange,placeholder, marginBottom,searchIcon,widthSearch,borderRadius}) => {

    return(
        <Slabel marginBottom={marginBottom} searchIcon={searchIcon}>
            {label && <Sspan>{label}</Sspan>}
            <Sinput type={type} height={height} width={width} placeholder={placeholder} onChange={onChange} borderRadius={borderRadius} />
            {
                searchIcon && (
                    <Sbutton widthSearch={widthSearch} height={height} borderRadius={borderRadius}>
                        <BsSearch />
                    </Sbutton>
                )
            }
        </Slabel>
    )

}

const Sinput = styled.input`
  background-color: white;
  border: 1px solid black;
  width: ${(props) => props.width ? props.width : "100%"};
  height: ${(props) => props.height ? props.height : "100%"};

  ${(props) =>
          props.searchIcon ? `
      border-radius: ${props.borderRadius} 0px 0px ${props.borderRadius};
    ` : `border-radius: ${props.borderRadius}`}
  
`

const Sbutton = styled.button`
  height: ${(props) => props.height};
  width: ${(props) => props.widthSearch};
  background-color: white;
  //border-radius: 0px 5px 5px 0px;
  border-radius: 0px ${(props) => props.borderRadius} ${(props) => props.borderRadius} 0px;
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

  ${(props) =>
          props.searchIcon && `
      display: flex;
      flex-direction: row;
    `}
`

export default Input