import React, {useState} from "react";
import Input from "../components/Input";
import styled from "styled-components";
import ButtonSubmit from "../components/ButtonSubmit";

const FormModify = ({cliente, width, functionModify}) => {

    const [data,setData] = useState({
        name: "",
        surname: "",
        email: "",
        birthdate : "",
        password: "",
        password_rep: "",
    })
    const [errors, setErrors] = useState({
        name: "",
        surname: "",
        email: "",
        birthdate : "",
        password: "",
        password_rep: "",
    });

    const handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }


    return(
        <Sdiv width={width}>
            <Input
                name={"name"}
                type={"text"}
                placeholder={"Nombre"}
                height="37px"
                width="30%"
                borderRadius={"5px"}
                margin={"30px 0px 0px 0px"}
                onChange={(e) => handleData(e)}
            />
            <Input
                name={"surname"}
                type={"text"}
                placeholder={"Apellidos"}
                height="37px"
                width="30%"
                borderRadius={"5px"}
                margin={"20px 0px 0px 0px"}
                onChange={(e) => handleData(e)}
            />
            <Input
                name={"birthdate"}
                type={"date"}
                onChange={(e) => handleData(e)}
                height="37px"
                width="30%"
                borderRadius={"5px"}
                margin={"20px 0px 0px 0px"}
                defaultValue={cliente.fecha_nac}
            />
            <Input
                name={"email"}
                type={"email"}
                placeholder={"Correo electronico"}
                height="37px"
                width="30%"
                borderRadius={"5px"}
                margin={"20px 0px 0px 0px"}
                onChange={(e) => handleData(e)}
            />
            <Input
                name={"password"}
                type={"password"}
                placeholder={"Contraseña"}
                height="37px"
                width="30%"
                borderRadius={"5px"}
                margin={"20px 0px 0px 0px"}
                onChange={(e) => handleData(e)}
            />
            {
                data.password && (
                    <Input
                        name={"password_rep"}
                        placeholder={"Confirmar contraseña"}
                        type={"password"}
                        height="37px"
                        width="30%"
                        borderRadius={"5px"}
                        margin={"20px 0px 0px 0px"}
                        onChange={(e) => handleData(e)}
                    />
                )
            }
            <Sdiv className={"buttons"}>
                <ButtonSubmit
                    label={"CONFIRMAR"}
                    width={"145px"}
                    color={"black"}
                    height={"31px"}
                    fontSize={"15px"}
                    backgroundColor={"#00FF00"}
                    borderRadius={"10px"}
                />
                <ButtonSubmit
                    label={"CANCELAR"}
                    width={"145px"}
                    color={"black"}
                    fontSize={"15px"}
                    height={"31px"}
                    backgroundColor={"#CB4335"}
                    borderRadius={"10px"}
                    onclick={functionModify}
                />
            </Sdiv>
        </Sdiv>
    )

}

const Sdiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width && props.width};
  
  &.buttons{
    margin: 30px;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
  }
`

export  default FormModify