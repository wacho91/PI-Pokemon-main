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