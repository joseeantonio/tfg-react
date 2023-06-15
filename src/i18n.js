import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    JOYAS: "JEWERLY",
                    CONTACTO: "CONTACT",
                    REGISTRO : "REGISTER",
                    INICIO_DE_SESION : "LOGIN",
                    PERFIL : "PROFILE",
                    CESTA : "SHOPPING BASKET",
                    COLLARES : "NECKLACES",
                    RELOJES : "WATCHES",
                    ANILLOS : "RINGS",
                    Busqueda : "Search",
                    terminos_y_condiciones : "Terms and Conditions",
                    Precio : "Price",
                    Sexo : "Gender",
                    Mujer : "Women",
                    Hombre : "Man",
                    ENVIANOS_TU_MENSAJE : "SEND US YOUR MESSAGE",
                    Correo_electronico : "Email",
                    Asunto : "Message Subject",
                    Mensaje : "Message",
                    ENVIAR : "SEND",
                    Nombre : "Name",
                    Apellidos : "Surnames",
                    aviso_legal_y_politica : "I have read and accept the legal notice and the privacy policy.",
                    promociones_notificaciones : "I want to receive notifications about promotions and products.",
                    INFORMACION_INICIO_DE_SESION : "LOGIN INFORMATION",
                    Contraseña : "Password",
                    Confirmar_contraseña : "Confirm Password",
                    Ya_tienes_cuenta : "Do you already have an account?",
                    CREAR_CUENTA : "CREATE ACCOUNT",
                    INFORMACION_PERSONAL : "PERSONAL INFORMATION",
                    ENTRAR_CON_SU_CUENTA : "LOG IN WITH YOUR ACCOUNT",
                    No_tienes_cuenta_todavía : "Don't have an account yet?",
                    INICIAR_SESION : "LOG IN",
                    Datos_Personales : "Personal information",
                    Fecha_de_nacimiento : "Birthdate",
                    MODIFICAR : "MODIFY",
                    CERRAR_SESION : "SIGN OFF",
                    CONFIRMAR : "CONFIRM",
                    CANCELAR : "CANCEL",


                }
            },
            es: {
                translation: {
                    JOYAS: "JOYAS",
                    CONTACTO: "CONTACTO",
                    REGISTRO : "REGISTRO",
                    INICIO_DE_SESION : "INICIO DE SESION ",
                    PERFIL : "PERFIL",
                    CESTA : "CESTA",
                    COLLARES : "COLLARES",
                    RELOJES : "RELOJES",
                    ANILLOS : "ANILLOS",
                    Busqueda : "Busqueda",
                    terminos_y_condiciones : "Terminos y Condiciones",
                    Precio : "Precio",
                    Sexo : "Sexo",
                    Mujer : "Mujer",
                    Hombre : "Hombre",
                    ENVIANOS_TU_MENSAJE : "ENVIANOS TU MENSAJE",
                    Correo_electronico : "Correo electronico",
                    Asunto : "Asunto",
                    Mensaje : "Mensaje",
                    ENVIAR : "ENVIAR",
                    Nombre : "Nombre",
                    Apellidos : "Apellidos",
                    aviso_legal_y_politica : "He leido y acepto el aviso legal y la politica de privacidad.",
                    promociones_notificaciones : "Quiero recibir notificaciones sobre promociones y productos.",
                    INFORMACION_INICIO_DE_SESION : "INFORMACION INICIO DE SESION",
                    Contraseña : "Contraseña",
                    Confirmar_contraseña : "Confirmar contraseña",
                    Ya_tienes_cuenta : "¿ Ya tienes cuenta ?",
                    CREAR_CUENTA : "CREAR CUENTA",
                    INFORMACION_PERSONAL : "INFORMACION PERSONAL",
                    ENTRAR_CON_SU_CUENTA : "ENTRAR CON SU CUENTA",
                    No_tienes_cuenta_todavía : "¿ No tienes cuenta todavía ?",
                    INICIAR_SESION : "INICIAR SESION",
                    Datos_Personales : "Datos Personales",
                    Fecha_de_nacimiento : "Fecha de nacimineto",
                    MODIFICAR : "MODIFICAR",
                    CERRAR_SESION : "CERRAR SESION",
                    CONFIRMAR : "CONFIRMAR",
                    CANCELAR : "CANCELAR",
                }
            }
        }
    });

export default i18n;
