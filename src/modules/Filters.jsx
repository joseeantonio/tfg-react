import React from "react";
import Filter from "../components/Filter";
import styled from "styled-components";

const Filters = ({margin}) => {

    return(
        <Sdiv margin={margin}>
            <Filter
                width={"270px"}
                name={"Precio"}
                options={["0 - 50 €","50 - 100 €","100 - 150 €"]}
            />
            <Filter
                width={"270px"}
                name={"Sexo"}
                options={["Mujer","Hombre","Unisex"]}
            />
        </Sdiv>
    )
}

const Sdiv = styled.div`
  margin: ${(props) => props.margin};
`

export default Filters