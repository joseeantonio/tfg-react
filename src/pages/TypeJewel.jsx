import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import {useParams} from "react-router-dom";
import Input from "../components/Input";
import Filters from "../modules/Filters";
import LinkSectionGroup from "../modules/LinkSectionGroup";
import JewelryList from "../modules/JewelryList";
import styled from "styled-components";
import productos from "../../src/assets/json/productosPrueba.json"
import {useTranslation} from "react-i18next";
import {petition} from "../services/api";
import pluralize from 'pluralize';
import ButtonSubmit from "../components/ButtonSubmit";

const TypeJewel = () => {

    //Cogemos el tipo a traves de la url
    const {type} = useParams()

    // Titulo de la pagina
    const [title,setTitle] = useState()
    // Todos los productos de esa categoria
    const [jewerly,setJewerly] = useState([])
    const [filters, setFilters] = useState([]);
    const [filterJewels,setFilterJewels] = useState([])
    const { t } = useTranslation();


    //Comprobamos si esta cada opcion en la lista de filtros y añadimos los filtros con esas opciones
    // a la una lista en variable y cuando acabe de recorrerlo le da el valor a la lista de productos filtrados.
    // Segun el tipo de joya que sea.
    const activeFilters = () => {
        if (type === "reloj") {
            let filterProducts = jewerly.filter((jewel) =>
                (filters.includes("34 mm") && jewel.talla === 34) ||
                (filters.includes("39 mm") && jewel.talla === 39) ||
                (filters.includes("42 mm") && jewel.talla === 42) ||
                (filters.includes("No") && jewel.resistenteAgua === 0) ||
                (filters.includes("100 m") && jewel.resistenteAgua === 100) ||
                (filters.includes("200 m") && jewel.resistenteAgua === 200) ||
                (filters.includes("Mas de 200 m") && jewel.resistenteAgua > 200) ||
                (filters.includes("Nylon") && jewel.materialCorrea === "nylon") ||
                (filters.includes("Cuero") && jewel.materialCorrea === "cuero") ||
                (filters.includes("Acero inoxidable") && jewel.materialCaja === "acero inoxidable") ||
                (filters.includes("Plata") && jewel.materialCaja === "plata") ||
                (filters.includes("Bronce") && jewel.materialCaja === "bronce") ||
                (filters.includes("Mecanico") && jewel.tipoMovimiento === "mecanico") ||
                (filters.includes("Cuarzo") && jewel.tipoMovimiento === "cuarzo") ||
                (filters.includes("Plata") && jewel.tipoMovimiento === "plata")
            )
            setFilterJewels(filterProducts)
        } else if (type === "anillo") {
            let filterProducts = jewerly.filter((jewel) =>
                (filters.includes("60 - 62 mm") && jewel.talla <=62 && jewel.talla >=60) ||
                (filters.includes("64 - 66 mm") && jewel.talla <=66 && jewel.talla >=64) ||
                (filters.includes("68 - 70 mm") && jewel.talla <=67 && jewel.talla >=68) ||
                (filters.includes("Azul") && jewel.color === "azul") ||
                (filters.includes("Amarillo") && jewel.color === "amarillo") ||
                (filters.includes("Negro") && jewel.color === "negro") ||
                (filters.includes("Verde") && jewel.color === "verde") ||
                (filters.includes("Rojo") && jewel.color === "rojo") ||
                (filters.includes("9 gramos") && jewel.peso === "9 gramos") ||
                (filters.includes("11 gramos") && jewel.peso === "11 gramos") ||
                (filters.includes("14 gramos") && jewel.peso === "14 gramos") ||
                (filters.includes("14k") && jewel.calidadMinima === "14K") ||
                (filters.includes("18k") && jewel.calidadMinima === "18K") ||
                (filters.includes("24k") && jewel.calidadMinima === "24K") ||
                (filters.includes("Diamante") && jewel.piedra === "diamante") ||
                (filters.includes("Moissanita") && jewel.piedra === "moissanita") ||
                (filters.includes("Zafiro") && jewel.piedra === "zafiro") ||
                (filters.includes("Esmeralda") && jewel.piedra === "esmeralda") ||
                (filters.includes("1") && jewel.numeroPiedra === 1) ||
                (filters.includes("2") && jewel.numeroPiedra === 2) ||
                (filters.includes("3") && jewel.numeroPiedra === 3) ||
                (filters.includes("5") && jewel.numeroPiedra === 5)
            )
            setFilterJewels(filterProducts)
        } else if (type === "collar") {
            let filterProducts = jewerly.filter((jewel) =>
                (filters.includes("Oro") && jewel.material === "Oro") ||
                (filters.includes("PLata") && jewel.material === "plata") ||
                (filters.includes("Magnetico") && jewel.cierre === "magnetico") ||
                (filters.includes("Mosqueton") && jewel.cierre === "mosqueton") ||
                (filters.includes("Gancho") && jewel.cierre === "gancho")
            )
            setFilterJewels(filterProducts)
        }
    }

    // Ponemos el titulo de la pagina en plural
    const plural = () => {
        if (type === "anillo") {
            setTitle("ANILLOS")
        }else if (type === "collar") {
            setTitle("COLLARES")
        }else{
            setTitle("RELOJES")
        }
    }

    // Llamada a api, para coger todos los productos de ese tipo de la api
    const fetchDataApi = async () => {
        try {
            const result = await petition(`/productos/tipo/${type}`)
            setJewerly(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchDataApi()
        plural()
    },[])

    //Cada vez que se añada algo a la lista de filtros se ejecuta la funcion
    useEffect(()=>{
        activeFilters()
    },[filters])


    return(
        <Sbody>
            <TitlePage name={title} />
            <Input
                placeholder={"Busqueda"}
                type={"search"}
                width={"309.07px"}
                height={"44px"}
                searchIcon={"true"}
                marginBottom={"50px"}
                widthSearch={"51.59px"}
                borderRadius={"5px"}
                margin={"0 auto 40px"}
            />
            <Sdiv>
                <Filters
                    margin={"0px 20px 40px 20px"}
                    type={type}
                    filters={filters}
                    setFilters={setFilters}
                />
                {
                    filters.length ===0 ? (
                        <JewelryList
                            productos={jewerly}
                            width={"930px"}
                            margin={"15px 5px 30px 15px"}
                        />
                    ) : (
                        <JewelryList
                            productos={filterJewels}
                            width={"930px"}
                            margin={"15px 5px 30px 15px"}
                        />
                    )
                }
            </Sdiv>
        </Sbody>
    )
}

const Sbody = styled.body`
  background-color: #DFDFDF;
`

const Sdiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  
  @media (width <= 815px) {
    flex-direction: column;
  }
`

export default TypeJewel