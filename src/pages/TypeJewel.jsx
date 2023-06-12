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

    const {type} = useParams()


    const [title,setTitle] = useState()
    const [jewerly,setJewerly] = useState([])
    const [filters, setFilters] = useState([]);
    const [filterJewels,setFilterJewels] = useState([])
    const { t } = useTranslation();


    //Comprobamos si esta cada opcion en la lista de filtros y añadimos los filtros con esas opciones
    // a la una lista en variable y cuando acabe de recorrerlo le da el valor a la lista de productos filtrados.
    const activeFilters = () => {
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
    }


    const plural = () => {
        if (type === "anillo") {
            setTitle("ANILLOS")
        }else if (type === "collar") {
            setTitle("COLLARES")
        }else{
            setTitle("RELOJES")
        }
    }

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