import React, { useState } from "react";


function Pagination({pokemonsPerPage, allPokemons, pagination, currentPage, setCurrentPage}) {
    const pageNumbers = [];
    const [input, setInput] = useState(currentPage);
    const max = allPokemons / pokemonsPerPage;

    for ( let i = 0; i <= Math.ceil(max); i++) {
        pageNumbers.push(i);
    }

    function nextPage() {
        setCurrentPage(currentPage + 1);
        setInput(input - 1);
    }

    function prevPage() {
        setCurrentPage(currentPage - 1);
        setInput(input - 1);
    }

    return(
        <nav>
            <ul>
                <button onClick={prevPage}>{'<'}</button>
                {pageNumbers.map(number => (
                    <li  key={number} onClick={() => pagination(number)}>
                        {number}<h1>.</h1>
                    </li>
                    ))}
                <button onClick={nextPage}>{'>'}</button>
            </ul>
        </nav>
    )
}

export default Pagination;