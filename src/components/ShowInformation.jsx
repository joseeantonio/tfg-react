import React from "react";
import styled from "styled-components";

const ShowInformation = ({name,value,property,width}) => {

    return(
        <Sdiv className={property ? "property" : "profile"} width={width}>
            <Sp className="name">{property ? name : `${name} :`}</Sp>
            <Sp className="value">{value}</Sp>
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex;
  
  &.property{
    border-bottom: 1px solid black;
    width: ${(props) => props.width};

    @media (width <= 600px) {
    max-width:270px;
    }
  }
  
`

const Sp = styled.p`
  
  &.name{
    margin-right: 10px;
  }

  &.value{
    margin-left: 10px;
  }
`

export default ShowInformation