import {useUserContext} from "../context/UserContext";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const LayoutPrivate = () => {

    // Cogemos el user y set user del context para almacenar lo que queramos
    const { user, setUser } = useUserContext()
    const navigate = useNavigate()

    //Comprobamos si el usuario esta logueado y si no lo esta te manda al register, se ejecutara cada vez que
    // se cambie el usuario , es decir cuando cerremos sesion o iniciemos.
    useEffect(() => {
        if (!user) {
            navigate('/register')
        }
    }, [user])
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default LayoutPrivate