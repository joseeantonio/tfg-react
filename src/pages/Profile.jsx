import React from "react";
import TitlePage from "../components/TitlePage";
import PersonalInformation from "../modules/PersonalInformation";
import cliente from "../../src/assets/json/productosPrueba.json"

const Profile = () => {

    return(
        <body>
            <TitlePage name={"PERFIL"} />
            <PersonalInformation cliente={cliente.cliente} width={"90%"} />
        </body>
    )
}

export default Profile