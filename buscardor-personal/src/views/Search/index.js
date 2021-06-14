import React, { useState } from 'react'
import SearchBox from "./components/SearchBox";
import data from '../../data/users.json'
import './style.css'

export default function Search() {

    // estado para el estilo condicional:
    const [isAtop, setIsAttop] = useState(false);
    // estado para el resultado de la data filtrada por handleSearchClick
    const [results, setResults] = useState([])

    console.log(data)


    // cuando pases una propiedad que sea un evento pasale el on
    const handleCloseSearch = () => {
        setIsAttop(false);
        // cuando hago click para cerrar reseteo el estado que me almacena el usuario buscado
        setResults([]);
    }

    // para guardar el value del input que viene de la funcion onSearch y realizar la busqueda
    const handleSearchClick = (searchText) => {
        // cambiar el texto que viene del input a minusculas para realizar la comparacion
        const searchTextMinus = searchText.toLowerCase()
        // validar si existe la data
        if (data?.length) {
            const filterData = data.filter((value) => {
                return (
                    value.name.toLowerCase().includes(searchTextMinus) ||
                    value.username.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) ||
                    value.phone.toLowerCase().includes(searchTextMinus)
                )
            });
            setResults(filterData);
        }
    };

    return (
        <div className={`search ${isAtop ? "search--top" : "search--center"}`}>
            <SearchBox
                onSearch={handleSearchClick}
                onClose={handleCloseSearch}
            />
        </div>
    )
}
