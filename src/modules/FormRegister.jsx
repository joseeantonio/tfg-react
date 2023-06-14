import React, {useState} from "react";
import TitleForm from "../components/TitleForm";
import Input from "../components/Input";
import styled from "styled-components";
import Checkbox from "../components/Checkbox";
import {Link} from "react-router-dom";
import ButtonSubmit from "../components/ButtonSubmit";
import {useTranslation} from "react-i18next";

const FormRegister = ({width, margin}) => {

    // Variable de traduccion
    const { t } = useTranslation();
    // constantes que modificamos segun el los CheckBox
    const [legalWarning,setLegalWarning] = useState(false)
    const [promotion,setPromotion] = useState(false)
    // Guardamos los datos de los input
    const [data,setData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        password_rep: "",
    })
    // Errores
    const [errors, setErrors] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        password_rep: "",
        legalWarning: "",
        promotion: "",
    });

    // con esta funcion cogemos los datos
    const handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    // Funcion que mira que no haya ningun fallo y si no hay ninguno te registra
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        const regExpEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (!data.name.trim()) {
            errors.name = "Por favor, completa el nombre";
        }else if (!isNaN(data.name)) {
            errors.name = "El nombre no debe de tener numeros";
        }

        if (!data.surname.trim()) {
            errors.surname = "Por favor, completa los apellidos";
        }else if (!isNaN(data.name)) {
            errors.surname = "Los apellidos no deben de tener numeros";
        }

        if (!data.email.trim()) {
            errors.email = "Por favor, completa el correo electronico";
        }else if (!regExpEmail.test(data.email)) {
            errors.email = "El correo electronico incorrecto";
        }

        if(!data.password.trim() ||  !data.password_rep.trim()) {
            if (!data.password.trim()) {
                errors.password = "Por favor, completa la contraseña";
            }else if (data.password.length < 6) {
                errors.password = "La contraseña debe de tener 6 o mas caracteres";
            }
            if (!data.password_rep.trim()) {
                errors.password_rep = "Por favor, completa confirmar la contraseña";
            }
        }else{
            if (data.password !== data.password_rep) {
                errors.password_rep = "Las contraseñas no coinciden";
            }
        }

        if (!legalWarning){
            errors.legalWarning = "Debes de aceptar los terminos para continuar";
        }

        setErrors(errors);

    };

    // Comprobamos si el checkBox esta seleccionado o no
    const checkedPromotion = () => {
        setPromotion(!promotion)
    }

    // Comprobamos si el checkBox esta seleccionado o no
    const checkedLegalWarning = () => {
        setLegalWarning(!legalWarning)
    }

    return(
        <Sdiv className="container" margin={margin} width={width}>
            <TitleForm name={"INFORMACION PERSONAL"} />
            <Sdiv className="nameAndSurname">
                <Input
                    name={"name"}
                    label={t("Nombre")}
                    height="37px"
                    width="100%"
                    borderRadius={"5px"}
                    error={errors.name}
                    onChange={(e) => handleData(e)}
                    margin={"0px 50px 0px 0px"}
                />
                <Input
                    name={"surname"}
                    label={t("Apellidos")}
                    height="37px"
                    width="100%"
                    borderRadius={"5px"}
                    error={errors.surname}
                    onChange={(e) => handleData(e)}
                />
            </Sdiv>
            <Checkbox
                label={t("aviso_legal_y_politica")}
                onClick={checkedLegalWarning}
                fontSize={"15px"}
            />
            {errors.legalWarning && <Sdiv className={"error"}>{errors.legalWarning}</Sdiv> }
            <Checkbox
                className="lastCheckbox"
                label={t("promociones_notificaciones")}
                onClick={checkedPromotion}
                marginBottom={"50px"}
                fontSize={"15px"}
            />
            <TitleForm name={t("INFORMACION_INICIO_DE_SESION")} />
            <Input
                name={"email"}
                label={t("Correo_electronico")}
                height="37px"
                width="100%"
                borderRadius={"5px"}
                error={errors.email}
                onChange={(e) => handleData(e)}
            />
            <Input
                name={"password"}
                label={t("Contraseña")}
                type={"password"}
                height="37px"
                width="100%"
                borderRadius={"5px"}
                error={errors.password}
                onChange={(e) => handleData(e)}
            />
            <Input
                name={"password_rep"}
                label={t("Confirmar_contraseña")}
                type={"password"}
                height="37px"
                width="100%"
                borderRadius={"5px"}
                error={errors.password_rep}
                onChange={(e) => handleData(e)}
            />
            <SLink to={"/login"}>{t("Ya_tienes_cuenta")}</SLink>
            <ButtonSubmit
                label={t("CREAR_CUENTA")}
                backgroundColor={"black"}
                color={"White"}
                onclick={handleSubmit}
            />
        </Sdiv>
    )
}

const Sdiv = styled.div`
  &.nameAndSurname{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    
    @media (width <= 1190px) {
      flex-direction: column;
    }
  }
  
  &.container{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: ${(props) => props.width || "1200px"};
    margin: ${(props) => props.margin || "0px"};
  }
  
  &.error{
    color: red;
    margin-left: 10px;
    font-size: 14px;
  }
`

const SLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  margin: 30px;
`

export default FormRegister