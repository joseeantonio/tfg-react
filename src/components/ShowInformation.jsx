import React from "react";
import styled from "styled-components";

const ShowInformation = ({name,value}) => {

    return(
        <Sdiv>
            <Sp className={"name"}>{name} :</Sp>
            <Sp className={"value"}>{value}</Sp>
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex;
`

const Sp = styled.p`
  
  &.name{
    min-width: 170px;
  }

  &.value{
  }
`

export default ShowInformation