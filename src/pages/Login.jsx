import React from "react";
import TitlePage from "../components/TitlePage";
import FormLogin from "../modules/FormLogin";
import {useTranslation} from "react-i18next";

const Login = () => {

    const { t } = useTranslation();
    return(
        <body>
            <TitlePage name={t("INICIO_DE_SESION")} />
            <FormLogin margin={"auto 10% 50px 10%"} width="auto" />
        </body>
    )
}

export default Login