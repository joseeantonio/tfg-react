import React from "react";
import TitlePage from "../components/TitlePage";
import FormContact from "../modules/FormContact";
import {useTranslation} from "react-i18next";

// Pagina de contacto y utilizamos modulos y componentes
const Contact = () => {

    const { t } = useTranslation();
    return(
        <body>
            <TitlePage name={t("CONTACTO")} />
            <FormContact margin={"auto 10% 50px 10%"} width="auto" />
        </body>
    )
}

export default Contact