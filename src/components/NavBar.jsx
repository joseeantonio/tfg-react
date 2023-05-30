import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {

    return (
        <SHeader>
            <SSectionOrdenador>
                <SNavLink to={"/profile"}><h1>LOGO</h1></SNavLink>
                <nav>
                    <SUlOrdenador>
                        <SLiOrdenador><SNavLink to={"/jewelry"}>JOYAS</SNavLink></SLiOrdenador>
                        <SLiOrdenador><SNavLink to={"/contact"}>CONTACTO</SNavLink></SLiOrdenador>
                        <SLiOrdenador><SNavLink to={"/shoppingCart"}><SFaShoppingCart /></SNavLink></SLiOrdenador>
                        <SLiOrdenador><SNavLink to={"/register"}><FaUserAlt /></SNavLink></SLiOrdenador>
                    </SUlOrdenador>
                </nav>
            </SSectionOrdenador>
        </SHeader>
    )
}

const SNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const SHeader = styled.header`
  border-bottom: 1px solid #000000;
`

const SUlOrdenador = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`

const SLiOrdenador = styled.li`
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
  background-color: #ECF0F1;
`

export  default NavBar