import React from "react";
import productos from "../assets/json/productosPrueba.json"
import JewelCard from "../components/JewelCard";
import styled from "styled-components";

const JewelryList = ({margin,width}) => {


    return(
        <Sdiv width={width} margin={margin}>
            {
                productos.productos.map((producto) => (
                    <JewelCard producto={producto} />
                ))
            }
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start; /* Alineación vertical hacia arriba */
  margin-top: 20px; /* Puedes ajustar el margen superior según sea necesario */
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`

export default JewelryList