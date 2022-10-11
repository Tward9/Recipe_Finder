const { Schema, model } = require('mongoose');

const ingredientSchema = new Schema({
    ingredientName: {
        type: String,
        required: true,
        trim: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    unit:{
        type: String,
        required: true,
        trim: true,
    }

})

module.exports = ingredientSchema