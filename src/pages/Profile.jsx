import React from "react";
import TitlePage from "../components/TitlePage";
import PersonalInformation from "../modules/PersonalInformation";

const Profile = () => {

    return(
        <body>
            <TitlePage name={"PERFIL"} />
            <PersonalInformation />
        </body>
    )
}

export default Profile