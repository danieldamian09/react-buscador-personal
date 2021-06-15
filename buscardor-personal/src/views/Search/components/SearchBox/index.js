import React, { useState } from 'react';
import './style.css'

export default function SearchBox({ onSearch, onClose }) {

    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        // para limpiar el input y llamar la funcion que modifica los estilos que viene del padre Search
        setSearchText("");
        onClose()
    }

    return (
        <div className="search-box">
            <h2 className="sarch-box-title">Buscador de Personal</h2>
            <div className="search-box-bottons">
                <label>
                    <input
                        type="text"
                        className="search-box-input"
                        value={searchText}
                        onChange={({ target: { value } }) => setSearchText(value)}
                    />
                </label>
                <button onClick={() => onSearch(searchText)} disabled={!searchText.length}>Buscar</button>
                <button onClick={handleSearchClick} disabled={!searchText.length}>Cerrar</button>
            </div>
        </div>
    )
}
