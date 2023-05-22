const axios = require('axios');
const { Videogames } = require('../db')

require('dotenv').config();//process.env

const URL = process.env.API_URL;
const API = process.env.API_KEY;

const STATUS_OK = 200;
const STATUS_ERROR = 404;

const CreateVideogames = async (req, res) => {
    const {name, id, descrption, platform, image, released, rating} = req.body;

    try {
        const CreateVidegame = await Videogames.findOrCreate({
           where: {
            name,
            id,
            descrption,
            platform,
            image,
            released,
            rating
           }
        })
        await CreateVidegame[0].setGenres(Genres);
        
    } catch (error) {
        res.status(STATUS_ERROR).json({error: error.message})
    }
    res.status(STATUS_OK).send('Created succesfily');
}

module.exports = {
    CreateVideogames,
}