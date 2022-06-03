import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cleanPokemons, getNamePokemons } from "../../actions";

function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNamePokemons(name));
        dispatch(cleanPokemons());
    }

    return (
        <div>
            <input value={name} type='text' placeholder='Search Pokemon...' onChange={(e) => handleInputChange(e)} />
            <button  id="btnSearch" type='submit' onClick={(e) => handleSubmit(e)} disabled={name === "" ? true : false}>Search</button>
        </div>
    )
}

export default SearchBar;