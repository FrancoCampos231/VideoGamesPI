const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routesVideogames = require('./routesVideogames');
const routesGenres = require('./routesGenres');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames' , routesVideogames);
router.use('/genres' , routesGenres);


module.exports = router;
