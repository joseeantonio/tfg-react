import React, {useState} from "react";
import TitleForm from "../components/TitleForm";
import Input from "../components/Input";
import styled from "styled-components";
import Checkbox from "../components/Checkbox";
import {Link} from "react-router-dom";
import ButtonSubmit from "../components/ButtonSubmit";

const FormRegister = ({width, margin}) => {

    const [checked,setChecked] = useState(false)

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
                />
                <Input
                    label={"Apellidos"}
                    height="37px"
                    width="450px"
                />
            </Sdiv>
            <Checkbox
                label={"He leido y acepto el aviso legal y la politica de privacidad."}
                onClick={function1}
            />
            <Checkbox
                className="lastCheckbox"
                label={"Quiero recibir notificaciones sobre promociones y productos."}
                onClick={function1}
                marginBottom={"50px"}
            />
            <TitleForm name={"INFORMACION INICIO DE SESION"} />
            <Input
                label={"Correo electronico"}
                height="37px"
                width="980px"
            />
            <Input
                label={"Contraseña"}
                type={"password"}
                height="37px"
                width="980px"
            />
            <Input
                label={"Confirmar contraseña"}
                height="37px"
                width="974px"
            />
            <SLink to={"/login"}>¿ Ya tienes cuenta ?</SLink>
            <ButtonSubmit
                label={"CREAR CUENTA"}
                backgroundColor={"black"}
                color={"White"}
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