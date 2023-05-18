import React from "react";
import TitlePage from "../components/TitlePage";
import Filters from "../modules/Filters";
import Input from "../components/Input";
import styled from "styled-components";
import LinkSectionGroup from "../modules/LinkSectionGroup";
import JewelCard from "../components/JewelCard";

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
                borderRadius={"5px"}
                margin={"0px 0px 40px 0px"}
            />
            <Sdiv>
                <Filters margin={"0px 0px 40px 0px"} />
                <div>
                    <LinkSectionGroup width={"900px"} />
                    <JewelCard />
                </div>
            </Sdiv>
        </Sbody>
    )
}

const Sbody = styled.body`
  background-color: #DFDFDF;
`

const Sdiv = styled.div`
  display: flex;
  justify-content: space-around;
`
export default JewelryList