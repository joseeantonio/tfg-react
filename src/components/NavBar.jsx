import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import {useTranslation} from "react-i18next";
import {useShoppingCartContext} from "../context/ShoppingCartContext";
import {useUserContext} from "../context/UserContext";
import logo from "../../src/assets/images/logo.png"

// NavBar
const NavBar = () => {

    // Cogemos el user y set user del context para almacenar lo que queramos
    const { user, setUser } = useUserContext()
    const { shoppingCart, setShoppingCart } = useShoppingCartContext()
    // Utilizamos este hook para controlar el menu hamburguesa
    const [mobile,setMobile] = useState(false)
    const { t } = useTranslation();

    const isMobile = () => {
        setMobile(!mobile)
    }

    useEffect(() => {

    }, [])

    return (
        <SHeader>
            <SSectionOrdenador>
                <SNavLink className={"logo"} to={"/"}><Sh1><Simg src={logo} /> MUNDO JOYAS</Sh1></SNavLink>
                <Snav className={"desktop"}>
                    <Sul className={"DESKTOP"}>
                        <Sli><SNavLink to={"/jewelry"}>{t("JOYAS")}</SNavLink></Sli>
                        <Sli><SNavLink to={"/contact"}>{t("CONTACTO")}</SNavLink></Sli>
                        <Sli><SNavLink to={"/shoppingCart"}>
                            <SFaShoppingCart />
                            {
                                shoppingCart > 0 && (
                                    <Sspan>{shoppingCart}</Sspan>
                                )
                            }
                        </SNavLink></Sli>
                        {
                            user ? (
                                <Sli><SNavLink to={"/profile"}><SFaUserAlt />{user.username}</SNavLink></Sli>
                            ) : (
                                <Sli><SNavLink to={"/register"}><FaUserAlt /></SNavLink></Sli>
                            )
                        }
                    </Sul>
                </Snav>
                <Sbutton onClick={isMobile}>
                    <SBsList />
                </Sbutton>
            </SSectionOrdenador>
            {
                mobile && (
                    <Snav className={"mobile"}>
                        <Sul className={"mobile"}>
                            <Sli><SNavLink to={"/jewelry"}>JOYAS</SNavLink></Sli>
                            <Sli><SNavLink to={"/contact"}>CONTACTO</SNavLink></Sli>
                            <Sli><SNavLink to={"/shoppingCart"}>
                                <SFaShoppingCart />
                                {
                                    shoppingCart > 0 && (
                                        <Sspan>{shoppingCart}</Sspan>
                                    )
                                }
                            </SNavLink></Sli>
                            {
                                user ? (
                                    <Sli><SNavLink to={"/profile"}><SFaUserAlt />{user.username}</SNavLink></Sli>
                                ) : (
                                    <Sli><SNavLink to={"/register"}><FaUserAlt /></SNavLink></Sli>
                                )
                            }
                        </Sul>
                    </Snav>
                )
            }
        </SHeader>
    )
}

const SFaUserAlt = styled(FaUserAlt)`
  margin-right: 5px;
`

const SNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;

  &.logo{
    font-family: "Playfair Display", serif;
  }
  
  &.active{
    color: rgb(34, 116, 127);
    //background-color: rgb(147, 206, 214);
  }
`

const Simg = styled.img`
  max-height: 30px;
  margin-right: 10px;
`
const Sh1 = styled.h1`
  display: flex;
  text-align: center;
  align-items: center;
`

const SHeader = styled.header`
  border-bottom: 1px solid #000000;
  background-color: #ECF0F1;
`

const Sspan = styled.span`
  margin-left: 5px;
  align-items: center;
  font-size: 20px;
`

const Snav = styled.nav`

  &.desktop{
    @media (width <= 878px){
      display: none;
    }
  }
  
  &.mobile{
    @media (width > 878px){
      display: none;
    }
  }
`

const SBsList = styled(BsList)`
  font-size: 35px;
`

const Sul = styled.ul`
  all: unset;
  list-style: none;
  display: flex;
  
  &.mobile{
    flex-direction: column;
  }
  
  &.desktop{
    justify-content: space-around;
  }
`

const Sli = styled.li`
  text-align: center;
  font-family: Inter;
  padding-right: 35px;
  padding-left: 35px;
  font-size: 16px;
`

const SFaShoppingCart = styled(FaShoppingCart)`
    font-size: 16px;
`

const SSectionOrdenador = styled.section`
  height: 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Sbutton = styled.button`
  all:unset;
  cursor: pointer;
  display: none;
  padding: 0 35px;
  height: 100%;
  
  @media(width <= 878px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export  default NavBar