const router = require('express').Router();
const {
    getRecipes,
    getRecipeById,
    createRecipe,
} = require('../controllers/Recipes');

router.get('/recipes', getRecipes);
router.get('/recipes/:idRecipe', getRecipeById);
router.post('/recipes', createRecipe);

module.exports = router;
