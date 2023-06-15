import React, {useEffect, useState} from "react";
import TitlePage from "../components/TitlePage";
import Filters from "../modules/Filters";
import Input from "../components/Input";
import styled from "styled-components";
import LinkSectionGroup from "../modules/LinkSectionGroup";
import JewelryList from "../modules/JewelryList";
import {petition} from "../services/api";
import {useTranslation} from "react-i18next";
import ButtonSubmit from "../components/ButtonSubmit";
import {FadeLoader} from "react-spinners";

// Pagina de Todos los productos y utilizamos modulos y componentes
const Jewelry = () => {

    //Todos los productos de la api
    const [allJewerly,setAllJewerly] = useState([])
    //La palabra que buscamos
    const [search,setSearch] = useState("")
    //variable para mostrar si estamos buscando o no
    const [isSearch,setIsSearch] = useState(false)
    //Productos de la paginacion
    const [jewerly,setJewerly] = useState([])
    //listra con las opciones de los filtros
    const [filters, setFilters] = useState([])
    //productos que tienen los filtros seleccionados
    const [filteredJewels,setFilteredJewels] = useState([])
    //traduccion
    const { t } = useTranslation()
    // cargando
    const [loading, setLoading] = useState(true)

    const [pagination,setPagination] = useState(12)

    //llamadas a la api
    const fetchDataApi = async () => {
        try {
            const result = await petition(`/productos/paginacion/${pagination}`)
            setJewerly(result)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchDataApiAll = async () => {
        try {
            const result = await petition(`/productos`)
            setAllJewerly(result)
        } catch (error) {
            console.log(error)
        }
    }

    //Comprobamos si esta cada opcion en la lista de filtros y añadimos los filtros con esas opciones
    // a la una lista en variable y cuando acabe de recorrerlo le da el valor a la lista de productos filtrados.
    // Si esta en busqueda ,comprobamos si tiene los requisitos de los filtros y si incluye la busqueda,
    // en el nombre. Tambien lo hacemos a la vez que la busqueda y sino que lo haga de los filtros solos.
    const activeFilters = () => {
        if (filters.length>0) {
            let filterSearchProducts = allJewerly.filter(
                (jewel) =>
                    ((filters.includes("0 - 50 €") && jewel.precio >= 0 && jewel.precio <= 50) ||
                    (filters.includes("51 - 100 €") && jewel.precio >= 51 && jewel.precio <= 100) ||
                    (filters.includes("101 - 150 €") && jewel.precio >= 101 && jewel.precio <= 150) ||
                    (filters.includes("Mujer") && jewel.sexo === "Mujer") ||
                    (filters.includes("Hombre") && jewel.sexo === "Hombre") ||
                    (filters.includes("Unisex") && jewel.sexo === "Unisex"))
            )
            if (isSearch) {
                filterSearchProducts = filterSearchProducts.filter((jewel) =>
                    jewel.nombre.toLowerCase().includes(search.toLowerCase())
                );
            }
            setFilteredJewels(filterSearchProducts)
            setIsSearch(true)
        }
        else if (isSearch && filters.length === 0) {
            let filterProducts = allJewerly.filter(
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

    //Paginacion
    const loadMore = () => {
        setPagination(pagination+12)
    }

    const functionSearch = () => {
        setIsSearch(true)
    }

    //Cada vez que cambie el numero de paginacion haremos una llamada a la api
    useEffect(()=>{
        fetchDataApi()
    },[pagination,jewerly])

    //Cada vez que se añada algo a la lista de filtros se ejecuta la funcion
    useEffect(()=>{
        activeFilters()
    },[filters,isSearch])

    //Cargamos todos los productos
    useEffect(()=>{
        fetchDataApiAll()
    },[])

    return(
        <Sbody>
            <TitlePage name={t("JOYAS")} />
            <Input
                placeholder={t("Busqueda")}
                type={"search"}
                width={"200px"}
                height={"44px"}
                searchIcon={"true"}
                marginBottom={"50px"}
                widthSearch={"51.59px"}
                borderRadius={"5px"}
                margin={"0 auto 40px"}
                fontSize={"17px"}
                onChange={handleChange}
                onClick={functionSearch}
                onKeyPress={enter}
            />
            <Sdiv>
                <Filters margin={"0px 20px 40px 20px"} filters={filters} setFilters={setFilters} />
                <div>
                    <LinkSectionGroup width={"900px"} margin={"15px 0px 0px 15px"} />
                    {
                            // Ponemos las posibilidades que hay para mostrar una u otra.
                            filters.length === 0 && !isSearch ? (
                                    loading ? (
                                        <Sdiv className={"loading"}>
                                            <SFadeLoader
                                                color="#000000"
                                                margin={16}
                                                height={42}
                                                width={8}
                                            />
                                        </Sdiv>
                                    ) : (
                                        <>
                                            <JewelryList
                                                productos={jewerly}
                                                width={"930px"}
                                                margin={"15px 5px 30px 15px"}
                                                fetchDataApi={fetchDataApi}
                                            />
                                            <ButtonSubmit
                                                label={"CARGAR MAS"}
                                                fontSize={"20px"}
                                                onclick={loadMore}
                                                margin={"30px auto"}
                                                color={"white"} width={"20%"}
                                                backgroundColor={"#5A5A5A"}
                                            />
                                        </>
                                        )
                        ) : (
                            loading ? (
                                    <Sdiv className={"loading"}>
                                        <SFadeLoader
                                            color="#000000"
                                            margin={16}
                                            height={42}
                                            width={8}
                                        />
                                    </Sdiv>
                                ) : (
                                    <JewelryList
                                        productos={filteredJewels}
                                        width={"930px"}
                                        margin={"15px 5px 30px 15px"}
                                        fetchDataApi={fetchDataApi}
                                    />
                                )
                        )
                    }
                </div>
            </Sdiv>
        </Sbody>
    )
}

// Estilos
const Sbody = styled.body`
  background-color: #DFDFDF;
  min-height: 700px;
`

const Sdiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  
  @media (width <= 1175px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.loading{
      height: 300px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

const SFadeLoader = styled(FadeLoader)`
  margin: 0 auto;
`

export default Jewelry