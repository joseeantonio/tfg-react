import React from "react";
import TitlePage from "../components/TitlePage";
import FormLogin from "../modules/FormLogin";

const Login = () => {
    return(
        <body>
            <TitlePage name={"INICIO DE SESION"} />
            <FormLogin margin={"0 auto 50px"} width="1000px"/>
        </body>
    )
}

export default Login