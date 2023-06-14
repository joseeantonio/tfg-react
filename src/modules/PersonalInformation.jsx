import React, {useState} from "react";
import styled from "styled-components";
import ShowInformation from "../components/ShowInformation";
import ButtonSubmit from "../components/ButtonSubmit";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import { FiSettings } from "react-icons/fi";
import { MdCancel } from "react-icons/md";

// Con este modulo mostramos la informacion personale del cliente
const PersonalInformation = ({cliente,width, functionModify}) => {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [idioms,setIdioms] = useState(false)

    // Cambiamos de idioma con la libreria i18n
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const show_settings = () => {
        setIdioms(!idioms)
    }


    const cerrarSesion = () => {
        navigate("/login");
    }

    return(
        <Sdiv width={width}>
            <ShowInformation name={t("Nombre")} value={cliente.nombre} />
            <ShowInformation name={t("Apellidos")} value={cliente.apellidos} />
            <ShowInformation name={t("Correo_electronico")} value={cliente.correo} />
            <ShowInformation name={t("Fecha_de_nacimiento")} value={cliente.fecha_nac} />
            <ShowInformation name={t("Contraseña")} value={"******"} />
            <ButtonSubmit
                label={<SFiSettings />}
                width={"145px"}
                height={"31px"}
                fontSize={"15px"}
                borderRadius={"10px"}
                onclick={show_settings}
            />
            {
                // Menu en el que podras cambiar de idioma
                idioms && (
                    <Sdiv className={"buttons_idioms"}>
                        <Sbutton onClick={show_settings}><MdCancel/></Sbutton>
                        <ButtonSubmit
                            label={t("INGLES")}
                            width={"145px"}
                            color={"black"}
                            height={"31px"}
                            fontSize={"15px"}
                            backgroundColor={"white"}
                            border={"1px solid black"}
                            borderRadius={"10px"}
                            onclick={() => changeLanguage('en')}
                        />
                        <ButtonSubmit
                            label={t("ESPAÑOL")}
                            width={"145px"}
                            color={"black"}
                            fontSize={"15px"}
                            height={"31px"}
                            backgroundColor={"white"}
                            border={"1px solid black"}
                            borderRadius={"10px"}
                            onclick={() => changeLanguage('es')}
                        />
                    </Sdiv>
                )
            }
            <Sdiv className={"buttons"}>
                <ButtonSubmit
                    label={t("MODIFICAR")}
                    width={"145px"}
                    color={"black"}
                    height={"31px"}
                    fontSize={"15px"}
                    backgroundColor={"#FFFF00"}
                    borderRadius={"10px"}
                    onclick={functionModify}
                />
                <ButtonSubmit
                    label={t("CERRAR_SESION")}
                    width={"145px"}
                    color={"black"}
                    fontSize={"15px"}
                    height={"31px"}
                    backgroundColor={"#CB4335"}
                    borderRadius={"10px"}
                />
            </Sdiv>
        </Sdiv>
    )
}

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
    @media (width <=590px) {
      flex-direction: column; 
      height: 90px;
    }
  }
  
  &.buttons_idioms{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid black;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    padding: 60px;
    justify-items: center;
  }
`

const Sbutton = styled.button`
  all: unset;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
`

const SFiSettings = styled(FiSettings)`
  font-size: 25px;
`

export default PersonalInformation