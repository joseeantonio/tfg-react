import React from "react";
import TitlePage from "../components/TitlePage";
import FormRegister from "../modules/FormRegister";
import styled from "styled-components";

const Register = () => {
    return(
        <body>
            <TitlePage name={"REGISTRO"} />
            <FormRegister width="1000px" />
        </body>
    )
}

export default Register