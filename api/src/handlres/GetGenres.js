const axios = require('axios');
const { Genres } = require('../db')

require('dotenv').config();//process.env


const API = process.env.API_KEY;

const STATUS_OK = 200;
const STATUS_ERROR = 404

const allGenres = async (req, res) => {
    try {
        const genresDB = await Genres.findAll();
        if(genresDB.length) res.status(STATUS_OK).json(genresDB);
        
        const {data} = await axios.get(`https://api.rawg.io/api/genres?key=${API}`);

        const Allgenres = data.results;

        Allgenres.forEach(async element => {
            await Genres.findOrCreate({
                where: {
                    name: element.name
                }
            })
        });

        const genresSend = Allgenres.map(element => {
            return {
                id: element.id,
                name: element.name
            }
        })
        
        res.status(STATUS_OK).json(genresSend);
        
    } catch (error) {
        res.status(STATUS_ERROR).json({ error: error.message})
    }
}

module.exports = {
    allGenres,
}