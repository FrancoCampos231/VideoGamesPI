const axios = require('axios');
const { Videogames, Genres } = require('../db')

require('dotenv').config();//process.env

const URL = process.env.API_URL;
const API = process.env.API_KEY;

const STATUS_OK = 200;
const STATUS_ERROR = 404;

const GetVideoGames = async (req, res) => {
    
    //traer la base de datos y cargar si tiene algo
    let videogamesBD = await Videogames.findAll({
        includes: Genres
    });
    
    videogamesBD  = videogamesBD.reduce((access, element) => access.concat({
        ...element,
        genres: element.genres.map(g => g.name)
    }), [])

    const { name } = req.query
    
    if (name)

     {
        try {
            const { data } = await axios.get(`${URL}?search=${name}&key=${API}`)
            const filterVideogames = data.results.map(vgames => {
                return {
                    id: vgames.id,
                    name: vgames.name,
                    description: vgames.description,
                    platform: vgames.parent_platforms,
                    image: vgames.background_image,
                    released: vgames.released,
                    rating: vgames.rating,
                    genres: vgames.genres.map(g => g.name)
                }
            });

            const filterVideogamesDB = videogamesBD.filter(data => data.name.toLowerCase().includes(name.toLowerCase()));

            const totalGames = [...filterVideogamesDB, ...filterVideogames.splice(0, 15)];
            return res.status(STATUS_OK).json(totalGames);
            
        } catch (error) {
           return res.status(STATUS_ERROR).json({error: error.message});
        }
    }
    else {
        try {
            let pagelimit = 0;
            let totalGames = [...videogamesBD];
            let response = await axios(`${URL}?key=${API}`)
            while(pagelimit < 6) {
                pagelimit++;
            
                const videogames = response.data.results.map((vgames) => {
                    return  {
                        id: vgames.id,
                        name: vgames.name,
                        description: vgames.description,
                        platform: vgames.parent_platforms,
                        image: vgames.background_image,
                        released: vgames.released,
                        rating: vgames.rating,
                        genres: vgames.genres.map(g => g.name)
                    };
                }); 
                    totalGames = [...totalGames, ...videogames];

                    response = await axios(response.data.next);
                    console.log(response)

                }
                res.status(STATUS_OK).json(totalGames);
        } catch (error) {
           return res.status(STATUS_ERROR).json({ message: 'Videogames not found'})
        }
    }
}

module.exports = {
    GetVideoGames,
};


