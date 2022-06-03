import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPokemonsByTypes, filterPokemonsCreated, getPokemons, getTypes, orderAttack, orderByName } from '../../actions';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';
import { cleanPokemons } from '../../actions';

function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector ((state) => state.pokemons);
    const allPokemonsTypes = useSelector ((state) => state.types);
    const [currentPage, setCurrentPage] = useState(1);
    const pokemonsPerPage = 12;
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    const [order, setOrder] = useState('');

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const load = useSelector((state) => state.isLoading);
    
    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    }, [dispatch]);

    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    function handleAttack(e) {
        e.preventDefault();
        dispatch(orderAttack(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterPokemonsCreated(e.target.value));
        setCurrentPage(1);
    }

    function handleFilterTypes(e) {
        e.preventDefault();
        dispatch(filterPokemonsByTypes(e.target.value));
        setCurrentPage(1);
    }

    function handleClick(e) {
        e.preventDefault();
        dispatch(cleanPokemons());
        dispatch(getPokemons());
        setCurrentPage(1);
    }

    return (
        <div>
            <div>
            {/* <button><h2>Filter by <p>&gt;</p> </h2></button> */}
            <select  onChange={e => handleFilterTypes(e)} value='disabled'>
                <option value=''>Type</option>
                <option value='all'>All Types</option>
                {allPokemonsTypes?.map((t) => (
                    <option key={t.name} value={t.name}>{t.name}</option>
                ))}
            </select>
            <select  onChange={e => handleFilterCreated(e)} value='disabled'>
                <option value="">Origin</option>
                <option value="all">All</option>
                <option value="api">Api</option>
                <option value="created">Created</option>
            </select>
            <select  onChange={e => handleSort(e)} value='disabled'>
                <option value=''>Name</option>
                <option  value='asc'>A - Z</option>
                <option  value='desc'>Z - A</option>
            </select>
            <select  onChange={e => handleAttack(e)} value='disabled'>
                <option value=''>Attack</option>
                <option value='hihger'>Hihg Attack</option>
                <option value='lower'>Lower Attack</option>
            </select>

            <button onClick={e => {handleClick(e)}}>
                    <h2>Refresh All</h2>
            </button>
            </div>

            <div>
                {
                    load ? (<Loader />) :
                    !allPokemons.length? (<NotFound />) :
                    currentPokemons?.map((el) => {
                        return (
                            <div key={el.id}>
                                <Link to={'/home/' + el.id}>
                                    <Card name={el.name} img={el.img} types={el.types} />
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
                {
            load ? (<Loader />) :
                <div>
                    { allPokemons.length >= 12 ? 
                    <Pagination pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                    : null
                    }
                </div>
            }
        </div>
    )
}

export default Home;