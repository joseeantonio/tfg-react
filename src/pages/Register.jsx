import React from "react";
import TitlePage from "../components/TitlePage";
import FormRegister from "../modules/FormRegister";

const Register = () => {
    return(
        <body>
            <TitlePage name={"REGISTRO"} />
            <FormRegister margin={"0 auto 50px"} width="1000px" />
        </body>
    )
}

export default Register