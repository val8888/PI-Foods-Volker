const { Router } = require('express');
const recipes = require('./recipeRouter');
const diets = require('./dietRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use(recipes);
router.use(diets);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
