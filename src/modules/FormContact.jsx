import React, {useState} from "react";
import TitleForm from "../components/TitleForm";
import styled from "styled-components";
import Input from "../components/Input";
import TextTarea from "../components/TextTarea";
import ButtonSubmit from "../components/ButtonSubmit";
import emailjs from 'emailjs-com';
import {useTranslation} from "react-i18next";

const FormContact = ({margin,width}) => {

    const { t } = useTranslation();

    const [data,setData] = useState({
        email: "",
        title: "",
        message: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        title: "",
        message: "",
    });

    const SERVICE_ID = 'service_3bez0td';
    const TEMPLATE_ID = 'template_wf56zej';
    const USER_ID = 'S2z1K0oRltgdm3Xyl';


    const handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();
        let ready = true;
        const errors = {};
        const regExpEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        // Prepara los parámetros del correo electrónico
        const templateParams = {
          to_email: data.email,
          from_name: 'Mundo de las Joyas',
          message: `Su mensaje : "${data.message}" a sido recibido correctamente`,
        };

        if (!data.email.trim()) {
            errors.email = "Por favor, completa el correo electronico";
            ready = false;
        }else if (!regExpEmail.test(data.email)) {
            errors.email = "El correo electronico incorrecto";
            ready = false;
        }

        if (!data.title.trim()) {
            errors.title = "Por favor, completa el asunto";
            ready = false;
        }else if (data.title.length >= 20) {
            errors.title = "El asunto debe tener menos de 20 caracteres";
            ready = false;
        }

        if (!data.message.trim()) {
            errors.message = "Por favor, completa el mensaje";
            ready = false;
        }

        if (ready){
            console.log("yes")
            // Envía el correo electrónico utilizando EmailJS
            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
                .then((response) => {
                    console.log('Correo electrónico enviado correctamente', response);
                })
                .catch((error) => {
                    console.error('Error al enviar el correo electrónico', error);
                });
        }else{
            setErrors(errors)
            console.log("no")
        }

      };


    return(
        <Sdiv margin={margin} width={width}>
            <TitleForm name={t("ENVIANOS_TU_MENSAJE")} />
            <Input
                name={"email"}
                label={t("Correo_electronico")}
                height="37px"
                width="100%"
                type={"email"}
                borderRadius={"5px"} 
                onChange={(e) => handleData(e)}
                error={errors.email}
            />
            <Input
                name={"title"}
                type={"text"}
                label={t("Asunto")}
                height="37px"
                width="100%"
                borderRadius={"5px"}
                onChange={(e) => handleData(e)}
                error={errors.title}
            />
            <TextTarea
                name={"message"}
                label={t("Mensaje")}
                height={"74px"}
                width="100%"
                margin={"0px 0px 45px 0px"}
                onChange={(e) => handleData(e)}
                error={errors.message}
            />
            <ButtonSubmit
                label={t("ENVIAR")}
                backgroundColor={"black"}
                color={"White"}
                onclick={sendEmail}
            />
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width ?  props.width : "100%"};
  margin: ${(props) => props.margin ? props.margin : "0px"};
`

export default FormContact