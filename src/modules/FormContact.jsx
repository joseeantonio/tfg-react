import React, {useState} from "react";
import TitleForm from "../components/TitleForm";
import styled from "styled-components";
import Input from "../components/Input";
import TextTarea from "../components/TextTarea";
import ButtonSubmit from "../components/ButtonSubmit";
import emailjs from 'emailjs-com';

const FormContact = ({margin,width}) => {


    const [data,setData] = useState({
        email: "",
        title: "",
        message: "",
    })

    const SERVICE_ID = 'service_3bez0td';
    const TEMPLATE_ID = 'template_wf56zej';
    const USER_ID = 'S2z1K0oRltgdm3Xyl';


    const handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const enviarCorreo = () => {
        // Prepara los parámetros del correo electrónico
        const templateParams = {
          to_email: data.email,
          from_name: 'Mundo de las Joyas',
          message: `Su mensaje : "${data.message}" a sido recibido correctamente`,
        };
      
        // Envía el correo electrónico utilizando EmailJS
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
          .then((response) => {
            console.log('Correo electrónico enviado correctamente', response);
          })
          .catch((error) => {
            console.error('Error al enviar el correo electrónico', error);
          });
      };


    return(
        <Sdiv margin={margin} width={width}>
            <TitleForm name={"ENVIANOS TU MENSAJE"} />
            <Input
                name={"email"}
                label={"Correo electronico"}
                height="37px"
                width="980px"
                borderRadius={"5px"} 
                onChange={(e) => handleData(e)}
            />
            <Input
                name={"title"}
                label={"Asunto"}
                height="37px"
                width="980px"
                borderRadius={"5px"}
                onChange={(e) => handleData(e)}
            />
            <TextTarea
                name={"message"}
                label={"Mensaje"}
                height={"74px"}
                width={"980px"}
                margin={"0px 0px 45px 0px"}
                onChange={(e) => handleData(e)}
            />
            <ButtonSubmit
                label={"ENVIAR"}
                backgroundColor={"black"}
                color={"White"} onclick={enviarCorreo}
            />
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${(props) => props.width ?  props.margin : "1200px"};
  margin: ${(props) => props.margin ? props.margin : "0px"};
`

export default FormContact