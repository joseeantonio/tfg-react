import React from "react";
import TitlePage from "../components/TitlePage";
import {FaUserAlt} from "react-icons/fa";
import styled from "styled-components";
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