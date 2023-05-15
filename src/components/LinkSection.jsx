import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const LinkSection = ({name,route,width,height,margin,color}) => {

    return(
        <Sdiv width={width} margin={margin} height={height}>
            <SLink color={color} to={route}>{name}</SLink>
        </Sdiv>
    )
}

const Sdiv = styled.div`
  width: ${(props) => props.width ? props.width : "100%"};
  height: ${(props) => props.height ? props.height : "100%"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #646465;
  margin: ${(props) => props.margin};
`

const SLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color} ;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 20px;
`

export default LinkSection