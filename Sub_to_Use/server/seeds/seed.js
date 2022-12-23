const { Recipe, Ingredient } = require('../models');
const { recipeList, ingredientList } = require('../seeds')

//create ingredients and recipes
db.once('open', async () => {
    try {
        await Recipe.deleteMany({});
        await Ingredient.deleteMany({});

        await Ingredient.create(ingredientList)
        await Recipe.create(recipeList);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});