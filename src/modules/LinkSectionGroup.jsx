import React from "react";
import LinkSection from "../components/LinkSection";
import styled from "styled-components";

const LinkSectionGroup = ({width}) => {


    return(
        <Sdiv width={width}>
            <LinkSection name={"PULSERAS"} route={"#"} width={"286px"} height={"49px"} color={"White"} margin={"10px"}/>
            <LinkSection name={"COLLARES"} route={"#"} width={"286px"} height={"49px"} color={"White"} margin={"10px"}/>
            <LinkSection name={"ANILLOS"} route={"#"} width={"286px"} height={"49px"} color={"White"} margin={"10px"}/>
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex; 
  justify-content: space-between;
  width: ${(props) => props.width};
`

export default LinkSectionGroup