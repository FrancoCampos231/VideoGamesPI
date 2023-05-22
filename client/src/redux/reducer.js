import { GET_VIDEOGAMES, SEARCH_VIDEOGAMES } from "./actions/types";

const Initialization = {
    videogame: []
}

const reducer = (state=Initialization, action) => {
    switch(action.type){
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogame: action.payload,
            };
        case SEARCH_VIDEOGAMES:
            return {
                ...state,
                videogame: action.payload
            };
        default: 
            return {...state}
    }
};

export default reducer;