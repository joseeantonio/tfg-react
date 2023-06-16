import React, {useEffect, useState, useTransition} from "react";
import TitlePage from "../components/TitlePage";
import PersonalInformation from "../modules/PersonalInformation";
import {FaUserAlt} from "react-icons/fa";
import styled from "styled-components";
import FormModify from "../modules/FormModify";
import {useTranslation} from "react-i18next";
import {useUserContext} from "../context/UserContext";
import {use} from "i18next";

// Pagina de Perfil y utilizamos modulos y componentes
const Profile = () => {

    const [modify, setModify] = useState(false);
    const { t } = useTranslation();
    const functionModify = () => {
        setModify(!modify)
    }
    // Cogemos el user y set user del context para almacenar lo que queramos
    const { user, setUser } = useUserContext()

    useEffect(()=>{

    },[user])

    return(
        <Sbody>
            <TitlePage name={t("PERFIL")} />
            <SFaUserAlt />
            <Sh1>{t("Datos_Personales")}</Sh1>
            {
                user && (
                    !modify ? (
                        <PersonalInformation
                            width={"90%"}
                            functionModify={functionModify}
                        />
                    ) : (
                        <FormModify
                            width={"90%"}
                            functionModify={functionModify}
                        />
                    )
                )
            }
        </Sbody>
    )
}

const SFaUserAlt = styled(FaUserAlt)`
  font-size: 100px;
  width: 100%;
  margin: 0 auto;
`

const Sh1 = styled.h1`
  margin: 10px;
  padding: 20px;
  border-bottom: 1px solid #000000;
  width: 70%;
  text-align: center;
`

const Sbody = styled.body`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export default Profile