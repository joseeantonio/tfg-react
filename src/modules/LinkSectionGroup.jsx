import React from "react";
import LinkSection from "../components/LinkSection";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

const LinkSectionGroup = ({width, margin}) => {

    const { t } = useTranslation();

    return(
        <Sdiv width={width} margin={margin}>
            <LinkSection name={t("COLLARES")} route={"/jewerly/collares"} width={"250px"} height={"49px"} color={"White"} margin={"10px"}/>
            <LinkSection name={t("RELOJES")} route={"/jewerly/relojes"} width={"250px"} height={"49px"} color={"White"} margin={"10px"}/>
            <LinkSection name={t("ANILLOS")} route={"/jewerly/anillos"} width={"250px"} height={"49px"} color={"White"} margin={"10px"}/>
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: ${(props) => props.margin && props.margin};
  @media (width <= 934px) {
    width: 80%;
  }
`

export default LinkSectionGroup