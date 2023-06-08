import React, {useState} from "react";
import {FaUserAlt} from "react-icons/fa";
import styled from "styled-components";
import ShowInformation from "../components/ShowInformation";
import ButtonSubmit from "../components/ButtonSubmit";
import {useNavigate} from "react-router-dom";
import Input from "../components/Input";

const PersonalInformation = ({cliente,width}) => {

    const navigate = useNavigate();
    const [modify, setModify] = useState(false);

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


    const cerrarSesion = () => {
        navigate("/login");
    }
    const functionModify = () => {
        setModify(!modify)
    }

    return(
        <Sdiv>
            <SFaUserAlt />
            <Sh1>Datos Personales</Sh1>
            {
                !modify ? (
                    <>
                        <ShowInformation name={"Nombre"} value={cliente.nombre} />
                        <ShowInformation name={"Apellidos"} value={cliente.apellidos} />
                        <ShowInformation name={"Correo electronico"} value={cliente.correo} />
                        <ShowInformation name={"Fecha de nacimiento"} value={cliente.fecha_nac} />
                        <ShowInformation name={"Contraseña"} value={"******"} />
                    </>
                ) : (
                    <>
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
                    </>
                )
            }

            <Sdiv className={"buttons"}>
                <ButtonSubmit
                    label={"MODIFICAR"}
                    width={"145px"}
                    color={"black"}
                    height={"31px"}
                    fontSize={"15px"}
                    backgroundColor={"white"}
                    borderRadius={"10px"}
                    border={"1px solid black"}
                    onclick={functionModify}
                />
                <ButtonSubmit
                    label={"CERRAR SESION"}
                    width={"145px"}
                    color={"black"}
                    fontSize={"15px"}
                    height={"31px"}
                    backgroundColor={"#CB4335"}
                    borderRadius={"10px"}
                    onclick={cerrarSesion}
                />
            </Sdiv>
        </Sdiv>
    )
}

const SFaUserAlt = styled(FaUserAlt)`
  font-size: 100px;
  width: 100%;
  margin: 0 auto;
`


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

const Sh1 = styled.h1`
  margin: 10px;
  padding: 20px;
  border-bottom: 1px solid #000000;
  width: 70%;
  text-align: center;
`

export default PersonalInformation