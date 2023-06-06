import React from "react";
import Filter from "../components/Filter";
import styled from "styled-components";

const Filters = ({margin, filters, setFilters}) => {
    

    return(
        <Sdiv margin={margin}>
            <Filter
                width={"230px"}
                name={"Precio"}
                options={["0 - 50 €","50 - 100 €","100 - 150 €"]}
                filters={filters} setFilters={setFilters}
            />
            <Filter
                width={"230px"}
                name={"Sexo"}
                options={["Mujer","Hombre","Unisex"]}
                filters={filters} setFilters={setFilters}
            />
        </Sdiv>
    )
}

const Sdiv = styled.div`
  margin: ${(props) => props.margin};
`

export default Filters