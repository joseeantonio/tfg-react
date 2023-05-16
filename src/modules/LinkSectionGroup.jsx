import React from "react";
import LinkSection from "../components/LinkSection";
import styled from "styled-components";

const LinkSectionGroup = ({width, margin}) => {


    return(
        <Sdiv width={width} margin={margin}>
            <LinkSection name={"PULSERAS"} route={"#"} width={"250px"} height={"49px"} color={"White"} margin={"10px"}/>
            <LinkSection name={"COLLARES"} route={"#"} width={"250px"} height={"49px"} color={"White"} margin={"10px"}/>
            <LinkSection name={"ANILLOS"} route={"#"} width={"250px"} height={"49px"} color={"White"} margin={"10px"}/>
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex; 
  justify-content: space-between;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`

export default LinkSectionGroup