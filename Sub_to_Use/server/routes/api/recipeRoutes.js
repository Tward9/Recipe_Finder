const router = require('express').Router();
const { User, Recipe, Ingredient } = require('../../models');

//testing, display all recipes
router.post('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({});
        console.log(recipeData);
        res.json(recipeData);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;