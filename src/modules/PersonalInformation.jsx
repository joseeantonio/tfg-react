import React from "react";
import {FaUserAlt} from "react-icons/fa";
import styled from "styled-components";
import ShowInformation from "../components/ShowInformation";
import ButtonSubmit from "../components/ButtonSubmit";
import {useNavigate} from "react-router-dom";

const PersonalInformation = () => {

    const navigate = useNavigate();

    const cerrarSesion = () => {
        navigate("/login");
    }

    return(
        <Sdiv>
            <SFaUserAlt />
            <Sh1>Datos Personales</Sh1>
            <ShowInformation name={"Nombre"} value={"Jose Antonio"} />
            <ShowInformation name={"Apellidos"} value={"Gonzalez Perez"} />
            <ShowInformation name={"Correo electronico"} value={"gonzalezperezjoseant@gmail.com"} />
            <ShowInformation name={"Edad"} value={"19 años"} />
            <ShowInformation name={"Contraseña"} value={"******"} />

            <Sdiv className={"buttons"}>
                <ButtonSubmit
                    label={"MODIFICAR"}
                    width={"145px"}
                    color={"black"}
                    height={"31px"}
                    fontSize={"15px"}
                    backgroundColor={"white"}
                    borderRadius={"10px"}
                />
                <ButtonSubmit
                    label={"CERRAR SESION"}
                    width={"145px"}
                    color={"black"}
                    fontSize={"15px"}
                    height={"31px"}
                    backgroundColor={"#CB4335"}
                    borderRadius={"10px"}
                    onclick={cerrarSesion}
                />
            </Sdiv>
        </Sdiv>
    )
}

const SFaUserAlt = styled(FaUserAlt)`
  font-size: 100px;
  width: 100%;
  margin: 0 auto;
`

const Sdiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  &.buttons{
    margin: 30px;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
  }
`

const Sh1 = styled.h1`
  margin: 10px;
  padding: 20px;
  border-bottom: 1px solid #000000;
  width: 70%;
  text-align: center;
`

export default PersonalInformation