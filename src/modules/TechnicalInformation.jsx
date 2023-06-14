import React from "react";
import ShowInformation from "../components/ShowInformation";
import styled from "styled-components";

// Segun el type que recibamos del props, mostraremos una cosa u otra porque nos indica el tipo de producto.
const TechnicalInformation = ({jewel,margin,width}) => {

    return(
        <Sdiv className={"all"} margin={margin} width={width}>
            <Sh1>Informacion Tecnica</Sh1>
                {
                    jewel.tipo === "anillo" ? (
                        <Sdiv className={"anillo"}>
                            <div>
                                <ShowInformation name={"Material :"} value={jewel.material} property={true} width={"400px"} />
                                <ShowInformation name={"Color :"} value={jewel.color} property={true} width={"400px"} />
                                <ShowInformation name={"Peso :"} value={jewel.peso} property={true} width={"400px"} />
                                <ShowInformation name={"Calidad Minima :"} value={jewel.calidadMinima} property={true} width={"400px"} />
                            </div>
                            <div>
                                <ShowInformation name={"Piedras :"} value={jewel.piedra} property={true} width={"400px"} />
                                <ShowInformation name={"Cantidad :"} value={jewel.numeroPiedra} property={true} width={"400px"} />
                                <ShowInformation name={"Talla :"} value={`${jewel.talla} mm`} property={true} width={"400px"} />
                                <ShowInformation name={"Sexo :"} value={jewel.sexo} property={true} width={"400px"} />
                            </div>
                        </Sdiv>
                    ) : jewel.tipo === "collar" ? (
                        <Sdiv className={"collar"}>
                            <div>
                                <ShowInformation name={"Material"} value={jewel.material} property={true} width={"400px"} />
                                <ShowInformation name={"Cierre :"} value={jewel.cierre} property={true} width={"400px"} />
                                <ShowInformation name={"Talla :"} value={jewel.talla} property={true} width={"400px"} />
                                <ShowInformation name={"Sexo :"} value={jewel.sexo} property={true} width={"400px"} />
                            </div>
                        </Sdiv>
                    ) : (
                        <Sdiv className={"reloj"}>
                            <div>
                                <ShowInformation name={"Resistencia al agua :"} value={`${jewel.resistenteAgua} m`} property={true} width={"400px"} />
                                <ShowInformation name={"Tipo de movimiento :"} value={jewel.tipoMovimiento} property={true} width={"400px"} />
                                <ShowInformation name={"Material de la correa :"} value={jewel.materialCorrea} property={true} width={"400px"} />
                                <ShowInformation name={"Material de la caja :"} value={jewel.materialCaja} property={true} width={"400px"} />
                            </div>
                            <div>
                                <ShowInformation name={"Talla :"} value={`${jewel.talla} mm`} property={true} width={"400px"} />
                                <ShowInformation name={"Sexo :"} value={jewel.sexo} property={true} width={"400px"} />
                            </div>
                        </Sdiv>
                    )
                }
        </Sdiv>
    )
}

const Sdiv = styled.div`
  &.anillo, &.reloj{
    display: flex;
    justify-content: space-between;

    @media (width <= 1170px){
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
  }
  
  &.collar{
    display: flex;
    justify-content: center;

    @media (width <= 1170px){
      flex-direction:column;
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