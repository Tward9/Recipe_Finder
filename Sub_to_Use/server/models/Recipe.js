const { Schema, model } = require('mongoose');
const ingredientSchema = require('./Ingredient');
const toolSchema = require('./Tool');
const instructionSchema = require('./Instructions');


const recipeSchema = new Schema(
    {
        recipeName: {
            type: String,
            required: true,
            trim: true,
        },
        recipeImage: {
            type: String,
            required: true,
            trim: true,
        },
        ingredients: [ingredientSchema],
        addIns: [ingredientSchema],
        tools: [toolSchema],
        instructions: [instructionSchema],
        recipeRating: {
            type: Number,
        }
    }
)
const Recipe = model('Recipe', recipeSchema)
module.exports = Recipe;