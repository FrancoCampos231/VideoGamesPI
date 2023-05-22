const axios = require('axios');
const { Videogames, Genres} = require('../db')



require('dotenv').config();

const URL = process.env.API_URL;
const API = process.env.API_KEY;

const STATUS_OK = 200;
const STATUS_ERROR = 404;

const GetDetailVideogames = async (req, res) => {
    
    const { id } = req.params;

    if(id.includes('-')) {
        let videogameDb = await Videogames.findOne({
            where: {
                id: id,
            },
            include: Genres
        })
            res.status(STATUS_OK).json(videogameDb);
    } else {
    try {
        const { data } = await axios.get(`${URL}/${id}?key=${API}`);
        if(data.name) {
            const videogame = {
                id: data.id,
                name: data.name,
                description: data.description,
                platform: data.parent_platforms,
                image: data.background_image,
                released: data.released,
                rating: data.rating,
                genres: data.genres
            };
            return res.status(STATUS_OK).json(videogame);
        }
        else {
            res.status(STATUS_ERROR).json({ message: 'videogame not found'});
        }
    } catch (error) {
        res.status(STATUS_ERROR).json({ message: error});
    }
}
};



module.exports = {
    GetDetailVideogames,
};