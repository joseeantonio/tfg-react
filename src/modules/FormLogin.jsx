import Input from "../components/Input";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import ButtonSubmit from "../components/ButtonSubmit";
import TitleForm from "../components/TitleForm";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {useUserContext} from "../context/UserContext";
import {petition, petitionWithToken} from "../services/api";

const FormLogin = ({margin,width}) => {

    const { t } = useTranslation();
    const navigate = useNavigate()

    // Recogemos datos de los input
    const [data,setData] = useState({
        email: "",
        password: "",
    })
    // Errores
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    // Cogemos el user y set user del context para almacenar lo que queramos
    const { user, setUser } = useUserContext()

    // Con esta funcion cogemos los datos de los input y lo almacenamos
    const handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    // Comprobamos si hay algun fallo y si no hay ninguno se hace la peticion al token y lo almacenamos en el LocalStorage.
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

            await fetchDataApiWithToken()

            navigate("/")

        } catch (error) {
            throw new Error('No estas autorizado')
        }
    }

    const fetchDataApiWithToken = async () => {
        try {
            const result = await petitionWithToken(`/me`)
            setUser(result)
        } catch (error) {
            console.log(error)
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