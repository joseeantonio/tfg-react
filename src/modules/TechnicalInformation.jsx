import React from "react";
import ShowInformation from "../components/ShowInformation";
import styled from "styled-components";

// Segun el type que recibamos del props, mostraremos una cosa u otra porque nos indica el tipo de producto.
const TechnicalInformation = ({jewel,margin,width}) => {

    return(
                jewel.tipo === "anillo" ? (
                    <Sdiv className={"all"} margin={margin} width={width}>
                        <Sh1>Informacion Tecnica</Sh1>
                        <Sdiv className={"informacion"}>
                            <div>
                                <ShowInformation name={"Material"} value={jewel.material} property={true} width={"400px"} />
                                <ShowInformation name={"Color"} value={jewel.color} property={true} width={"400px"} />
                                <ShowInformation name={"Peso"} value={jewel.peso} property={true} width={"400px"} />
                                <ShowInformation name={"Calidad Minima"} value={jewel.calidadMinima} property={true} width={"400px"} />
                            </div>
                            <div>
                                <ShowInformation name={"Piedras"} value={jewel.piedra} property={true} width={"400px"} />
                                <ShowInformation name={"Cantidad"} value={jewel.numeroPiedra} property={true} width={"400px"} />
                            </div>
                        </Sdiv>
                    </Sdiv>
                ) : (
                    <div>

                    </div>
                )
    )
}

const Sdiv = styled.div`
  &.informacion{
    display: flex;
    justify-content: space-between;

    @media (width <= 1170px){
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
  }
  
  &.all{
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
  }
`

const Sh1 = styled.h1`
  display: flex;
  justify-content: center;
  margin: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
`

export default TechnicalInformation