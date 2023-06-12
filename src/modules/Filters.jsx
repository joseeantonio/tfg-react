import React from "react";
import Filter from "../components/Filter";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

const
    Filters = ({margin, filters, setFilters,width}) => {


        const { t } = useTranslation();
    return(
        <Sdiv margin={margin} width={width}>
            <Filter
                width={"230px"}
                name={t("Precio")}
                options={["0 - 50 €","50 - 100 €","100 - 150 €"]}
                filters={filters} setFilters={setFilters}
            />
            <Filter
                width={"230px"}
                name={t("Sexo")}
                options={[t("Mujer"),t("Hombre"),"Unisex"]}
                filters={filters} setFilters={setFilters}
            />
        </Sdiv>
    )
}

const Sdiv = styled.div`
  margin: ${(props) => props.margin && props.margin};
  width: ${(props) => props.width && props.width};
`

export default Filters