import React from "react";
import NavBar from "../components/NavBar";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";

const LayoutPublic = () => {

    return(
        <main>
            <NavBar />
            <Outlet />
            <Footer />
        </main>
    )

}
export default LayoutPublic