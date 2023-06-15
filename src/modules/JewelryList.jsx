import React from "react";
import JewelCard from "../components/JewelCard";
import styled from "styled-components";

// Le pasamos por props una lista de productos y por cada uno lo recorre y utiliza un componente por cada uno
const JewelryList = ({margin,width,productos,fetchDataApi}) => {

    return(
        <Sdiv width={width} margin={margin}>
            {
                productos.map((producto) => (
                    <JewelCard
                        producto={producto}
                        key={producto.id}
                        fetchDataApi={fetchDataApi}
                    />
                ))
            }
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  max-width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  
  @media (width <= 934px) {
  }
`

export default JewelryList