import React, {useState} from "react";
import {FaUserAlt} from "react-icons/fa";
import styled from "styled-components";
import ShowInformation from "../components/ShowInformation";
import ButtonSubmit from "../components/ButtonSubmit";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const PersonalInformation = ({cliente,width, functionModify}) => {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    };


    const cerrarSesion = () => {
        navigate("/login");
    }

    return(
        <Sdiv width={width}>
            <ShowInformation name={"Nombre"} value={cliente.nombre} />
            <ShowInformation name={"Apellidos"} value={cliente.apellidos} />
            <ShowInformation name={"Correo electronico"} value={cliente.correo} />
            <ShowInformation name={"Fecha de nacimiento"} value={cliente.fecha_nac} />
            <ShowInformation name={"Contraseña"} value={"******"} />
            <Sdiv className={"buttons"}>
                <ButtonSubmit
                    label={"MODIFICAR"}
                    width={"145px"}
                    color={"black"}
                    height={"31px"}
                    fontSize={"15px"}
                    backgroundColor={"#FFFF00"}
                    borderRadius={"10px"}
                    onclick={functionModify}
                />
                <ButtonSubmit
                    label={"CERRAR SESION"}
                    width={"145px"}
                    color={"black"}
                    fontSize={"15px"}
                    height={"31px"}
                    backgroundColor={"#CB4335"}
                    borderRadius={"10px"}
                />
                <button onClick={() => changeLanguage('en')}>INGLES</button>
                <button onClick={() => changeLanguage('es')}>ESPAÑOL</button>
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
  width: ${(props) => props.width && props.width};
  
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