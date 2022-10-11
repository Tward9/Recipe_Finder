const { Schema, model } = require('mongoose');
const ingredientSchema = require('./Ingredient');
const toolSchema = require('./Tool');


const recipeSchema = new Schema(
    {
        ingredients: [ingredientSchema],
        tools: [toolSchema]
    }
)
const Recipe = model('Recipe', recipeSchema)
module.exports = Recipe;