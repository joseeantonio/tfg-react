import React from "react";
import Filter from "../components/Filter";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

const
    Filters = ({margin, filters, setFilters,width, type}) => {


        const { t } = useTranslation();
    return(
            !type ? (
                <Sdiv margin={margin} width={width}>
                    <Filter
                        width={"230px"}
                        name={t("Precio")}
                        options={["0 - 50 €","51 - 100 €","101 - 150 €"]}
                        filters={filters} setFilters={setFilters}
                    />
                    <Filter
                        width={"230px"}
                        name={t("Sexo")}
                        options={[t("Mujer"),t("Hombre"),"Unisex"]}
                        filters={filters} setFilters={setFilters}
                    />
                </Sdiv>
            ) : type === "relojes" ? (
                <Sdiv margin={margin} width={width}>
                    <Filter
                        width={"230px"}
                        name={t("Talla")}
                        options={["34 mm","39 mm","42 mm"]}
                        filters={filters} setFilters={setFilters}
                    />
                    <Filter
                        width={"230px"}
                        name={t("Resistencia al agua")}
                        options={["No","100 m","200 m","Mas de 200 m"]}
                        filters={filters} setFilters={setFilters}
                    />
                    <Filter
                        width={"230px"}
                        name={t("Tipo de Movimiento")}
                        options={["Mecanico","Cuarzo","Intelligente"]}
                        filters={filters} setFilters={setFilters}
                    />
                    <Filter
                        width={"230px"}
                        name={t("Material Correa")}
                        options={["Nylon","Cuero"]}
                        filters={filters} setFilters={setFilters}
                    />
                    <Filter
                        width={"230px"}
                        name={t("Material Caja")}
                        options={["Acero inoxidable","Bronce","Plata"]}
                        filters={filters} setFilters={setFilters}
                    />
                </Sdiv>
            ) : (
                <Sdiv margin={margin} width={width}>
                    <Filter
                        width={"230px"}
                        name={t("Precio")}
                        options={["0 - 50 €","51 - 100 €","101 - 150 €"]}
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
    )
}

const Sdiv = styled.div`
  margin: ${(props) => props.margin && props.margin};
  width: ${(props) => props.width && props.width};
`

export default Filters