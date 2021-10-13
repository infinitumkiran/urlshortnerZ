const z = require('./model/urls-schema')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
var base64 = require('base-64');
const { response } = require('express');

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(cors());




const addurl = async (req, res) => {
    const URL = req.body;
    console.log(req.body);

    var encodedData = base64.encode(URL.url);

    var newencoded = encodedData.slice(0, 10);

    console.log((newencoded));
    const newurl = new z({ hash: newencoded, url: URL.url });



    try {
        await newurl.save();
        res.status(201).json(newurl);

    } catch (err) {
        res.status(409).json(err);
    }

}





const geturl = async (req, res) => {
    try {
        const fetchdata= await z.find({hash:req.params.hash});
        console.log(fetchdata[0].url);
        // const user = await .find();
        // response.status(200).json(url);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
    

}




app.post('/', addurl);
app.get('/:hash',geturl);



const url = 'mongodb://user:123@cluster0-shard-00-00.vnfe8.mongodb.net:27017,cluster0-shard-00-01.vnfe8.mongodb.net:27017,cluster0-shard-00-02.vnfe8.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-eg6j6l-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = '3001';

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
    app.listen(PORT, () => console.log('DB connected successfully'))
}).catch(err => {
    console.error('FAILED TO CONNECT', err);
})

