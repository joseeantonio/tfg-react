import React from "react";
import TitlePage from "../components/TitlePage";
import Filters from "../modules/Filters";
import Input from "../components/Input";
import styled from "styled-components";
import LinkSectionGroup from "../modules/LinkSectionGroup";

const JewelryList = () => {
    return(
        <Sbody>
            <TitlePage name={"JOYAS"} />
            <Input
                placeholder={"Busqueda"}
                type={"search"}
                width={"309.07px"}
                height={"44px"}
                searchIcon={"true"}
                marginBottom={"50px"}
                widthSearch={"51.59px"}
                borderRadius={"5px"} />
            <Filters />
            <LinkSectionGroup width={"1050px"} />
        </Sbody>
    )
}

const Sbody = styled.body`
  background-color: #DFDFDF;
`
export default JewelryList