const initialState = {
    pokemons : [],
    allPokemons: [],
    types: [],
    detail: [],
    isLoading: true
}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_POKEMONS' :
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
                isLoading: false
            }

        case 'GET_TYPES' : 
            return {
                ...state,
                types: action.payload
            }

        default: return state;
    }
}



export default rootReducer;