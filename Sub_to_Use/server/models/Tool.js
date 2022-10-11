const { Schema, model } = require('mongoose');

const toolSchema = new Schema({
    Tool: {
        type: String,
        required: true,
        trim: true,
    },
})

module.exports = toolSchema