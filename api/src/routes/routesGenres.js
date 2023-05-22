const { Router } = require('express')
const { allGenres } = require('../handlres/GetGenres')


const genresRoute = Router();

genresRoute.get('/', allGenres);

module.exports = genresRoute;

