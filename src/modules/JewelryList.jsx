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
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`

export default JewelryList