import React from "react";
import TitleForm from "../components/TitleForm";
import styled from "styled-components";
import Input from "../components/Input";
import TextTarea from "../components/TextTarea";
import ButtonSubmit from "../components/ButtonSubmit";

const FormContact = ({margin,width}) => {
    return(
        <Sdiv margin={margin} width={width}>
            <TitleForm name={"ENVIANOS TU MENSAJE"} />
            <Input
                label={"Correo electronico"}
                height="37px"
                width="980px"
            />
            <Input
                label={"Asunto"}
                height="37px"
                width="980px"
            />
            <TextTarea
                label={"Mensaje"}
                height={"74px"}
                width={"980px"}
                marginBottom={"50px"}
            />
            <ButtonSubmit
                label={"ENVIAR"}
                backgroundColor={"black"}
                color={"White"}
            />
        </Sdiv>
    )
}

const Sdiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${(props) => props.width || "1200px"};
  margin: ${(props) => props.margin || "0px"};
`

export default FormContact