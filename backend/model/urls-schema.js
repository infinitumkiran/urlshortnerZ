const mongoose=require('mongoose')

const urlschema=mongoose.Schema({
    hash: String,
    url: String,
    date: Date,

})

const url=mongoose.model('url',urlschema);

module.exports =url;