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

        case 'ORDER_BY_NAME':
            let sortedArr = action.payload === 'asc' 
            ? state.pokemons.sort(function(a, b) {
                if (a.name > b.name) return 1;
                if (b.name > a.name) return -1;
                return 0;
            }) : state.pokemons.sort(function(a, b) {
                if (a.name > b.name) return -1;
                if (b.name > a.name) return 1;
                return 0;
            })
            return {
                ...state,
                pokemons: sortedArr
            }

        case 'ORDER_BY_ATTACK':
            let sortedAttack = action.payload === 'lower'
            ? state.pokemons.sort(function(a, b) {
                if (a.attack > b.attack) return 1;
                if (b.attack > a.attack) return -1;
                return 0;
            }) : state.pokemons.sort(function(a, b) {
                if (a.attack > b.attack) return -1;
                if (b.attack > a.attack) return 1;
                return 0;
            })
            return {
                ...state,
                pokemons: sortedAttack
            }

        case 'FILTER_CREATED':
            const allPokemons = state.allPokemons;
            const createdFilter = action.payload === 'created' ? allPokemons.filter(el => el.createdInDb) : null;
            const apiFilter = action.payload === 'api' ? allPokemons.filter(el => !el.createdInDb) : null;
            return {
                ...state,
                pokemons: action.payload === 'all' ? allPokemons : action.payload === 'created' ? createdFilter : action.payload === 'api' ? apiFilter : null
            }

        case 'FILTER_BY_TYPES' :
            const typesFilter = action.payload === 'all' ? state.allPokemons : state.allPokemons.filter(pk => pk.types.find(type => type[0] === action.payload))
            return {
                ...state,
                pokemons: typesFilter
            }

        case 'CLEAN_POKEMONS':
            return {
                ...state,
                isLoading : true
            }

        default: return state;
    }
}



export default rootReducer;