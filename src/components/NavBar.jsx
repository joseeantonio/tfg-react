import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BsList } from "react-icons/bs";

const NavBar = () => {

    const [mobile,setMobile] = useState(false)

    const isMobile = () => {
        setMobile(!mobile)
    }

    useEffect(() => {

    }, [])

    return (
        <SHeader>
            <SSectionOrdenador>
                <SNavLink className={"logo"} to={"/profile"}><h1>MUNDO DE LAS JOYAS</h1></SNavLink>
                <Snav className={"desktop"}>
                    <Sul className={"DESKTOP"}>
                        <Sli><SNavLink to={"/jewelry"}>JOYAS</SNavLink></Sli>
                        <Sli><SNavLink to={"/contact"}>CONTACTO</SNavLink></Sli>
                        <Sli><SNavLink to={"/shoppingCart"}><SFaShoppingCart /></SNavLink></Sli>
                        <Sli><SNavLink to={"/register"}><FaUserAlt /></SNavLink></Sli>
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
                            <Sli><SNavLink to={"/shoppingCart"}><SFaShoppingCart /></SNavLink></Sli>
                            <Sli><SNavLink to={"/register"}><FaUserAlt /></SNavLink></Sli>
                        </Sul>
                    </Snav>
                )
            }
        </SHeader>
    )
}

const SNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 20px;

  &.logo{
    font-family: "Playfair Display", serif;
  }
`;

const SHeader = styled.header`
  border-bottom: 1px solid #000000;
  background-color: #ECF0F1;
`

const Snav = styled.nav`

  &.desktop{
    @media (width <= 800px){
      display: none;
    }
  }
  
  &.mobile{
    @media (width > 800px){
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
  padding: 22.5px 35px;
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
  
  @media(width <= 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export  default NavBar