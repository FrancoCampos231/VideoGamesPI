import axios from 'axios';

import { GET_VIDEOGAMES, GET_VIDEOGAME, SEARCH_VIDEOGAMES } from "./types";

export const getVideogames = () => {
    return async function(dispatch) {
        const apiData = await axios.get('http://localhost:3001/videogames');
        const videogames = apiData.data;
        dispatch({
            type: GET_VIDEOGAMES,
            payload: videogames
        })
    }
}

export const getVideogame = (id) => {
    return async function(dispatch) {
        const apiData = await axios.get(`http://localhost:3001/videogames/${id}`);
        const videogame = apiData.data;
        dispatch({
            type: GET_VIDEOGAME,
            payload: videogame
        })
    }
}


export const searchName = (name) => {
    console.log(name)
    return async function(dispatch) {
        try{
            const apiData = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            const search = apiData.data;
            if(!search.length) throw Error ('there are no videogames with that name')
            return dispatch({
                type: SEARCH_VIDEOGAMES,
                payload: search
            });
        } catch (error){
            dispatch({
                type: SEARCH_VIDEOGAMES,
                payload: []
            })
        }
    };
};
