import React, {useState} from "react";
import TitleForm from "../components/TitleForm";
import Input from "../components/Input";
import styled from "styled-components";
import Checkbox from "../components/Checkbox";
import {Link} from "react-router-dom";
import ButtonSubmit from "../components/ButtonSubmit";

const FormRegister = ({width, margin}) => {

    const [checked,setChecked] = useState(false)
    const [data,setData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        password_rep: '',
    })
    const [errors, setErrors] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        password_rep: "",
    });

    const handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!data.name.trim()) {
            errors.name = "Por favor, completa el nombre";
        }

        if (!data.surname.trim()) {
            errors.surname = "Por favor, completa los apellidos";
        }

        if (!data.email.trim()) {
            errors.email = "Por favor, completa el correo electronico";
        }

        if (!data.password.trim()) {
            errors.password = "Por favor, completa la contraseña";
        }

        if (!data.password_rep) {
            errors.password_rep = "Por favor, completa la contraseña";
        }

        setErrors(errors);

    };

    const function1 = () => {
        setChecked(!checked)
    }

    return(
        <Sdiv className="container" margin={margin} width={width}>
            <TitleForm name={"INFORMACION PERSONAL"} />
            <Sdiv className="nameAndSurname">
                <Input
                    label={"Nombre"}
                    height="37px"
                    width="450px"
                    borderRadius={"5px"}
                    error={errors.name}
                />
                <Input
                    label={"Apellidos"}
                    height="37px"
                    width="450px"
                    borderRadius={"5px"}
                    error={errors.surname}
                />
            </Sdiv>
            <Checkbox
                label={"He leido y acepto el aviso legal y la politica de privacidad."}
                onClick={function1}
                fontSize={"15px"}
            />
            <Checkbox
                className="lastCheckbox"
                label={"Quiero recibir notificaciones sobre promociones y productos."}
                onClick={function1}
                marginBottom={"50px"}
                fontSize={"15px"}
            />
            <TitleForm name={"INFORMACION INICIO DE SESION"} />
            <Input
                label={"Correo electronico"}
                height="37px"
                width="980px"
                borderRadius={"5px"}
                error={errors.email}
            />
            <Input
                label={"Contraseña"}
                type={"password"}
                height="37px"
                width="980px"
                borderRadius={"5px"}
                error={errors.password}
            />
            <Input
                label={"Confirmar contraseña"}
                height="37px"
                width="974px"
                borderRadius={"5px"}
                error={errors.password_rep}
            />
            <SLink to={"/login"}>¿ Ya tienes cuenta ?</SLink>
            <ButtonSubmit
                label={"CREAR CUENTA"}
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
  }
  
  &.container{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: ${(props) => props.width || "1200px"};
    margin: ${(props) => props.margin || "0px"};
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