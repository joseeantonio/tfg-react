import React from "react";
import {useParams} from "react-router-dom";
import TitlePage from "../components/TitlePage";

const Jewel = () => {
    const {id} = useParams()
    console.log(id)

    return(
        <body>

        </body>
    )
}

export default Jewel