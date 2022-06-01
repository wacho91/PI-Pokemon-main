import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../../actions';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';

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

    return (
        <div>
            <div>
                {
                    load ? (<Loader />) :
                    !currentPokemons.length? (<NotFound />) :
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