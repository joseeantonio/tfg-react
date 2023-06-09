import React, {useState, useTransition} from "react";
import TitlePage from "../components/TitlePage";
import PersonalInformation from "../modules/PersonalInformation";
import cliente from "../../src/assets/json/productosPrueba.json"
import {FaUserAlt} from "react-icons/fa";
import styled from "styled-components";
import FormModify from "../modules/FormModify";
import {useTranslation} from "react-i18next";

const Profile = () => {

    const [modify, setModify] = useState(false);
    const { t } = useTranslation();
    const functionModify = () => {
        setModify(!modify)
    }

    return(
        <Sbody>
            <TitlePage name={t("PERFIL")} />
            <SFaUserAlt />
            <Sh1>{t("Datos_Personales")}</Sh1>
            {
                !modify ? (
                    <PersonalInformation
                        cliente={cliente.cliente}
                        width={"90%"}
                        functionModify={functionModify}
                    />
                ) : (
                    <FormModify
                        cliente={cliente.cliente}
                        width={"90%"}
                        functionModify={functionModify}
                    />
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