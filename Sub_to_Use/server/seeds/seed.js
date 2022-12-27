const { Recipe, Ingredient, Tool, Instruction } = require('../models');
const { recipeList, ingredientList, toolList, instructionList } = require('../seeds')

//create ingredients and recipes
db.once('open', async () => {
    try {
        await Recipe.deleteMany({});
        await Ingredient.deleteMany({});
        await Tool.deleteMany({});
        await Instruction.deleteMany({});

        await Ingredient.create(ingredientList);
        await Tool.create(toolList);
        await Instruction.create(instructionList);
        await Recipe.create(recipeList);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});