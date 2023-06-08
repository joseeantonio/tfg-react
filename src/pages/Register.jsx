import React from "react";
import TitlePage from "../components/TitlePage";
import FormRegister from "../modules/FormRegister";
import {useTranslation} from "react-i18next";

const Register = () => {

    const { t } = useTranslation();
    return(
        <body>
            <TitlePage name={t("REGISTRO")} />
            <FormRegister margin={"auto 10% 50px 10%"} width="auto" />
        </body>
    )
}

export default Register