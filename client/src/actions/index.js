import axios from 'axios';

// UNION ENTRE BACK Y FRONT TRAE LOS POKEMONES DE LA API

export function getPokemons(){
    return async function(dispatch) {
        try {
            const json = await axios.get('http://localhost:3001/pokemons/');
            return dispatch({
                type: 'GET_POKEMONS',
                payload: json.data
            });
            
        } catch(error) {
            console.log(error);
        }
    }
};

// export function getPokemons() {
//     return async function(dispatch) {
//         var json = await axios.get("http:/localhost:3001/pokemons");
//         return dispatch({
//             type: 'GET_POKEMONS',
//             payload: json.data
//         })
//     }
// }

export function getTypes() {
    return async function(disptach) {
        try {
            const info = await axios.get('http://localhost:3001/types/')
            return disptach({
                type: 'GET_TYPES',
                payload: info.data
            })
        } catch (error) {
            console.log(error);
        }
        
    }
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderAttack(payload) {
    return {
        type: 'ORDER_BY_ATTACK',
        payload
    }
}

export function filterPokemonsCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function filterPokemonsByTypes(payload) {
    return {
        type: 'FILTER_BY_TYPES',
        payload
    }
}

export function cleanPokemons() {
    return {
        type: 'CLEAN_POKEMONS',
        payload: {}
    }
}



export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/pokemons/' + id);
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function deletePokemon(id) {
    return async function(dispatch) {
        try {
            const json = await axios.delete('/delete/' + id)
            return dispatch({
                type: "DELETE_POKEMON",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getNamePokemons(name) {
    return async function(dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/pokemons?name=' + name)
            return dispatch({
                type: 'GET_NAME_POKEMONS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}