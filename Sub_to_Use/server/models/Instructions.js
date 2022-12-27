const { Schema, model } = require('mongoose');

const instructionSchema = new Schema({
    instruction: {
        type: String,
        required: true,
        trim: true,
    }
})

module.exports = instructionSchema