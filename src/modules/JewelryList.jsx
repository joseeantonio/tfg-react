import React from "react";
import JewelCard from "../components/JewelCard";
import styled from "styled-components";

const JewelryList = ({margin,width,productos}) => {


    return(
        <Sdiv width={width} margin={margin}>
            {
                productos.map((producto) => (
                    <JewelCard producto={producto} key={producto.id} />
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