import React from "react";
import TitlePage from "../components/TitlePage";
import FormRegister from "../modules/FormRegister";

const Register = () => {
    return(
        <body>
            <TitlePage name={"REGISTRO"} />
            <FormRegister margin={"auto 10% 50px 10%"} width="auto" />
        </body>
    )
}

export default Register