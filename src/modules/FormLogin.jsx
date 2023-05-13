import Input from "../components/Input";
import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import ButtonSubmit from "../components/ButtonSubmit";
import TitleForm from "../components/TitleForm";

const FormLogin = ({margin,width}) => {
    return(
        <Sdiv margin={margin} width={width}>
            <TitleForm name={"ENTRAR CON SU CUENTA"} />
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
            <SLink to={"/register"}>¿ No tienes cuenta todavía ?</SLink>
            <ButtonSubmit
                label={"INICIAR SESION"}
                backgroundColor={"black"}
                color={"White"}
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