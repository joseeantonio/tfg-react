import React from "react";
import TitlePage from "../components/TitlePage";
import FormContact from "../modules/FormContact";

const Contact = () => {
    return(
        <body>
            <TitlePage name={"CONTACTO"} />
            <FormContact margin={"auto 10% 50px 10%"} width="auto" />
        </body>
    )
}

export default Contact