const a= require('./routes');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors');

const app = express();
app.use(bodyParser.json({extended:true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

a.add();

const url = 'mongodb://user:123@cluster0-shard-00-00.vnfe8.mongodb.net:27017,cluster0-shard-00-01.vnfe8.mongodb.net:27017,cluster0-shard-00-02.vnfe8.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-eg6j6l-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT= '3001';

mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
    app.listen(PORT,()=>console.log('DB connected successfully'))
}).catch(err=>{
    console.error('FAILED TO CONNECT',err);
})

