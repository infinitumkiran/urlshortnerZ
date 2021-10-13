const mongoose=require('mongoose')

const urlschema=mongoose.Schema({
    hash: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },

})

const newurl=mongoose.model('url',urlschema);

module.exports =newurl;