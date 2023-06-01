import React from "react";
import TitlePage from "../components/TitlePage";
import FormLogin from "../modules/FormLogin";

const Login = () => {
    return(
        <body>
            <TitlePage name={"INICIO DE SESION"} />
            <FormLogin margin={"auto 10% 50px 10%"} width="auto" />
        </body>
    )
}

export default Login