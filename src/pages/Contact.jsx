import React from "react";
import TitlePage from "../components/TitlePage";
import FormContact from "../modules/FormContact";

const Contact = () => {
    return(
        <body>
            <TitlePage name={"CONTACTO"} />
            <FormContact margin={"0 auto"} width="1000px" />
        </body>
    )
}

export default Contact