import Input from "../components/Input";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import ButtonSubmit from "../components/ButtonSubmit";
import TitleForm from "../components/TitleForm";
import {useTranslation} from "react-i18next";
import axios from "axios";

const FormLogin = ({margin,width}) => {

    const { t } = useTranslation();

    const [data,setData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = {}
        const regExpEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

        if (!data.email.trim()) {
            errors.email = "Por favor, completa el correo electronico"
        }else if (!regExpEmail.test(data.email)) {
            errors.email = "El correo electronico incorrecto"
        }

        if (!data.password.trim()) {
            errors.password = "Por favor, completa la contraseña"
        }else if (data.password.length < 6) {
            errors.password = "La contraseña debe de tener 6 o mas caracteres"
        }

        setErrors(errors);

        //Comprobamos que las no tiene ni una propiedad el objeto
        if (Object.keys(errors).length === 0) {
            authenticatedPetition(data.email, data.password)
        }
    };

    // Hacemos esta peticion sin reutilizar la funcion petition de la api.js porque esta utilizamos un Basic Auth.
    const authenticatedPetition = async (email, password) => {
        try {
            const response = await axios.post(
                'http://localhost:8080/token',
                {},
                {
                    auth: {
                        username: email,
                        password: password,
                    },
                }
            )
            // Guardamos el token en el localStorage
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            throw new Error('No estas autorizado')
        }
    }


    return(
        <Sdiv margin={margin} width={width}>
            <TitleForm name={t("ENTRAR_CON_SU_CUENTA")} />
            <Input
                name={"email"}
                label={t("Correo_electronico")}
                type={"email"}
                height="37px"
                width="100%"
                borderRadius={"5px"} 
                onChange={(e) => handleData(e)}
                error={errors.email}
            />
            <Input
                name={"password"}
                label={t("Contraseña")}
                type={"password"}
                height="37px"
                width="100%"
                borderRadius={"5px"}
                onChange={(e) => handleData(e)}
                error={errors.password}
            />
            <SLink to={"/register"}>{t("No_tienes_cuenta_todavía")}</SLink>
            <ButtonSubmit
                label={t("INICIAR_SESION")}
                backgroundColor={"black"}
                color={"White"} 
                onclick={handleSubmit}
            />
        </Sdiv>
    )
}

const SLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  margin: 30px;
`

const Sdiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${(props) => props.width || "1200px"};
  margin: ${(props) => props.margin || "0px"};
`

export default FormLogin