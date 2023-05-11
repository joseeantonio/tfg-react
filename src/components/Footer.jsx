import React from "react";
import {Link} from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
    return(
        <Sfooter>
            <SLink to={"#"}>Terminos y condiciones</SLink>
            <SLink to={"#"}>Cookies</SLink>
            <div>
                <SLink className="icono" to={"#"}><FaInstagram /></SLink>
                <SLink className="icono" to={"#"}><FaFacebook /></SLink>
                <SLink className="icono" to={"#"}><FaTwitter /></SLink>
            </div>
        </Sfooter>
    )
}

const Sfooter = styled.footer`

  display: flex;
  justify-content: space-around;
  border-top: 1px solid #000000;
  padding: 22.5px 35px;
  background-color: #ECF0F1;

`;

const SLink = styled(Link)`

  text-decoration: none;
  color: black;
  font-size: 16px;
  
  &.icono {
    margin-right: 7px;
    margin-left: 7px;
  }

`

export default  Footer