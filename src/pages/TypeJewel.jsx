import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import {useParams} from "react-router-dom";
import Input from "../components/Input";
import Filters from "../modules/Filters";
import JewelryList from "../modules/JewelryList";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {petition} from "../services/api";

// Pagina de Un tipo de producto y utilizamos modulos y componentes
const TypeJewel = () => {

    //Cogemos el tipo a traves de la url
    const {type} = useParams()
    // Titulo de la pagina
    const [title,setTitle] = useState()
    // Todos los productos de esa categoria
    const [jewerly,setJewerly] = useState([])
    //La palabra que buscamos
    const [search,setSearch] = useState("")
    //variable para mostrar si estamos buscando o no
    const [isSearch,setIsSearch] = useState(false)
    const [filters, setFilters] = useState([]);
    const [filteredJewels,setFilteredJewels] = useState([])
    const { t } = useTranslation();


    //Comprobamos si esta cada opcion en la lista de filtros y añadimos los filtros con esas opciones
    // a la una lista en variable y cuando acabe de recorrerlo le da el valor a la lista de productos filtrados.
    // Segun el tipo de joya que sea.
    const activeFilters = () => {
        if (filters.length>0) {
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
                if (isSearch) {
                    filterProducts = filterProducts.filter((jewel) =>
                        jewel.nombre.toLowerCase().includes(search.toLowerCase())
                    );
                }
                setFilteredJewels(filterProducts)
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
                if (isSearch) {
                    filterProducts = filterProducts.filter((jewel) =>
                        jewel.nombre.toLowerCase().includes(search.toLowerCase())
                    );
                }
                setFilteredJewels(filterProducts)
            } else if (type === "collar") {
                let filterProducts = jewerly.filter((jewel) =>
                    (filters.includes("Oro") && jewel.material === "Oro") ||
                    (filters.includes("PLata") && jewel.material === "plata") ||
                    (filters.includes("Magnetico") && jewel.cierre === "magnetico") ||
                    (filters.includes("Mosqueton") && jewel.cierre === "mosqueton") ||
                    (filters.includes("Gancho") && jewel.cierre === "gancho")
                )
                if (isSearch) {
                    filterProducts = filterProducts.filter((jewel) =>
                        jewel.nombre.toLowerCase().includes(search.toLowerCase())
                    );
                }
                setFilteredJewels(filterProducts)
            }
        }
        else if (isSearch && filters.length === 0) {
            let filterProducts = jewerly.filter(
                (jewel) => jewel.nombre.toLowerCase().includes(search.toLowerCase())
            )
            setFilteredJewels(filterProducts)
            setIsSearch(true)
        }
    }

    //Nos sirve para que cuando escriba en el input de busqueda y le de al enter haga la funcion
    const enter = (e) => {
        if (e.key === 'Enter') {
            functionSearch()
        }
    };

    //Cogemos el valor del input de la busqueda
    const handleChange=(e)=>{
        setSearch(e.target.value)
        if (e.target.value.trim() === "") {
            setIsSearch(false)
        }
    }

    const functionSearch = () => {
        setIsSearch(true)
    }

    // Ponemos el titulo de la pagina en plural
    const plural = () => {
        if (type === "anillo") {
            setTitle("ANILLOS")
        }else if (type === "collar") {
            setTitle("COLLARES")
        }else if (type === "reloj" ){
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

    // Nada mas se cargue esta pagina lo primero sera coger el nombre del titulo y los dato de los productos.
    useEffect(()=>{
        fetchDataApi()
        plural()
    },[])

    //Cada vez que se añada algo a la lista de filtros se ejecuta la funcion
    useEffect(()=>{
        activeFilters()
    },[filters,isSearch])


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
                onChange={handleChange}
                onClick={functionSearch}
                onKeyPress={enter}
            />
            <Sdiv>
                <Filters
                    margin={"0px 20px 40px 20px"}
                    type={type}
                    filters={filters}
                    setFilters={setFilters}
                />
                {
                    // Ponemos las posibilidades que hay para mostrar una u otra.
                    filters.length === 0 && !isSearch ? (
                        <>
                            <JewelryList
                                productos={jewerly}
                                width={"930px"}
                                margin={"15px 5px 30px 15px"}
                            />
                        </>
                    ) : (
                        <JewelryList
                            productos={filteredJewels}
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