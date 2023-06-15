import React, {useEffect, useState} from "react";
import Input from "../components/Input";
import styled from "styled-components";
import ButtonSubmit from "../components/ButtonSubmit";
import {useTranslation} from "react-i18next";
import {useUserContext} from "../context/UserContext";
import {petitionWithToken} from "../services/api";

const FormModify = ({cliente, width, functionModify}) => {

    // Cogemos el user y set user del context para almacenar lo que queramos
    const { user, setUser } = useUserContext()
    const { t, i18n } = useTranslation();
    const [data,setData] = useState({
        name: "",
        surname: "",
        email: "",
        birthdate : "",
        password: "",
        password_rep: "",
        username : "",
    })
    const [errors, setErrors] = useState({
        name: "",
        surname: "",
        email: "",
        birthdate : "",
        password: "",
        password_rep: "",
        username : "",
    });

    const handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }


    // Funcion que mira que no haya ningun fallo y si no hay ninguno te registra
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
        const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (!isNaN(data.name) && !data.name.trim()) {
            errors.name = "El nombre no debe de tener numeros";
        }

        if (!isNaN(data.name) && !data.surname.trim()) {
            errors.surname = "Los apellidos no deben de tener numeros";
        }

        if (!regExpEmail.test(data.email) && data.email.trim()) {
            errors.email = "El correo electronico incorrecto";
        }

        if (data.birthdate && data.birthdate.trim()) {
            const today = new Date()
            const birthdate = new Date(data.birthdate)

            // Cogemos el año actual y el seleccionado
            const currentYear = today.getFullYear()
            const yearbirthdate = birthdate.getFullYear()

            // Lo restamos para saber cuantos años hay de diferencia
            const differenceYears = currentYear - yearbirthdate

            // Si el numero que de es menor de 18, es menor
            if (differenceYears < 18) {
                errors.birthdate = "Debes de ser mayor de edad"
            }
        }

        if (data.password.trim() && data.password.length < 6 && (data.password !== data.password_rep)) {
            errors.password = "Las contraseñas no coinciden";
        }

        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            const finallyData = user
            if (data.name !== "") {
                finallyData.nombre = data.name
            }
            if (data.surname !== "") {
                finallyData.apellidos = data.surname
            }
            if (data.email !== "") {
                finallyData.correo = data.email
            }
            if (data.password !== "") {
                finallyData.contraseña = data.password
            }
            if (data.birthdate !== "") {
                finallyData.fecha_nac = data.birthdate
            }
            if (data.username !== "") {
                finallyData.username = data.username
            }
            try {
                const result = await petitionWithToken(`/clientes/${user.id}`, "put", finallyData)
                setUser(result)
            } catch (error) {
                console.log(error)
            }
        }
    }


    useEffect(()=>{

    },[])


    return(
        <Sdiv width={width}>
            <Input
                name={"name"}
                type={"text"}
                placeholder={t("Nombre")}
                height="37px"
                width="40%"
                borderRadius={"5px"}
                margin={"30px 0px 0px 0px"}
                onChange={(e) => handleData(e)}
                error={errors.name}
            />
            <Input
                name={"surname"}
                type={"text"}
                placeholder={t("Apellidos")}
                height="37px"
                width="40%"
                borderRadius={"5px"}
                margin={"20px 0px 0px 0px"}
                onChange={(e) => handleData(e)}
                error={errors.surname}
            />
            <Input
                name={"birthdate"}
                type={"date"}
                onChange={(e) => handleData(e)}
                height="37px"
                width="40%"
                borderRadius={"5px"}
                margin={"20px 0px 0px 0px"}
                defaultValue={cliente.fecha_nac}
                error={errors.birthdate}
            />
            <Input
                name={"email"}
                type={"email"}
                placeholder={t("Correo_electronico")}
                height="37px"
                width="40%"
                borderRadius={"5px"}
                margin={"20px 0px 0px 0px"}
                onChange={(e) => handleData(e)}
                error={errors.email}
            />
            <Input
                name={"username"}
                placeholder={t("Correo_electronico")}
                height="37px"
                width="40%"
                borderRadius={"5px"}
                margin={"20px 0px 0px 0px"}
                onChange={(e) => handleData(e)}
                error={errors.username}
            />
            <Input
                name={"password"}
                type={"password"}
                placeholder={t("Contraseña")}
                height="37px"
                width="40%"
                borderRadius={"5px"}
                margin={"20px 0px 0px 0px"}
                onChange={(e) => handleData(e)}
                error={errors.password}
            />
            {
                data.password && (
                    <Input
                        name={"password_rep"}
                        placeholder={t("Confirmar_contraseña")}
                        type={"password"}
                        height="37px"
                        width="40%"
                        borderRadius={"5px"}
                        margin={"20px 0px 0px 0px"}
                        onChange={(e) => handleData(e)}
                    />
                )
            }
            <Sdiv className={"buttons"}>
                <ButtonSubmit
                    label={t("CONFIRMAR")}
                    width={"145px"}
                    color={"black"}
                    height={"31px"}
                    fontSize={"15px"}
                    backgroundColor={"#00FF00"}
                    borderRadius={"10px"}
                    onclick={handleSubmit}
                />
                <ButtonSubmit
                    label={t("CANCELAR")}
                    width={"145px"}
                    color={"black"}
                    fontSize={"15px"}
                    height={"31px"}
                    backgroundColor={"#CB4335"}
                    borderRadius={"10px"}
                    onclick={functionModify}
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
`

export  default FormModify