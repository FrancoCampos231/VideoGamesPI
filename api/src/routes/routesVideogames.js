const { Router } = require('express');
const { GetDetailVideogames} = require('../handlres/GetDetailVideogames');
const { GetVideoGames } = require('../handlres/GetVideogames');
const { CreateVideogames }  = require('../handlres/PostVideogames');

const vgamesRoutes = Router();

vgamesRoutes.get('/', GetVideoGames);
vgamesRoutes.get('/:id', GetDetailVideogames);
vgamesRoutes.post('/', CreateVideogames);

module.exports = vgamesRoutes;