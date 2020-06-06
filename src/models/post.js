const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    article:  {
        type: String,
        maxlength: 150
    },
    createAt: {
        type:  Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Posts', postSchema)