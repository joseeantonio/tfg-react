import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
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
                    terminos_y_condiciones : "Terms and Conditions"
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
                    terminos_y_condiciones : "Terminos y Condiciones"
                }
            }
        }
    });

export default i18n;
