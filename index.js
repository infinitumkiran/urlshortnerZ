const z = require('./model/urls-schema')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
var base64 = require('base-64');
const { response } = require('express');
const sha256 = require('sha256');
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(cors());


var a = 1;


const addurl = async (req, res) => {
    const URL = req.body;
    console.log(req.body);

    var encodedData = sha256(new Date().toISOString()+URL.url);

    var newencoded = encodedData.slice(0, 10);
    
    console.log((newencoded));
    console.log(sha256.x2('hello'));

    const fetchdata = await z.find({ url: URL.url });

    if (fetchdata.length != 0) {
        if (URL.url==fetchdata[0].url) {
            res.status(201).json(fetchdata[0]);
        }
        else {
            console.log("url hash already exists");
            newencoded = a.toString() + newencoded;
            a++;
            console.log(newencoded);
            const newurl = new z({ hash: newencoded, url: URL.url });

            try {
                await newurl.save();
                console.log(newurl);
                res.status(201).json({ hash: newencoded, url: URL.url });

            } catch (err) {
                console.log(err);
                res.status(409).json(err);
            }
        }

    }



    else {
        const newurl = new z({ hash: newencoded, url: URL.url });

        try {
            await newurl.save();
            res.status(201).json({ hash: newencoded, url: URL.url });

        } catch (err) {
            console.log(err);
            res.status(409).json(err);
        }

    }



}
app.get("/:hash", async (req, res) => {

    const fetchdata = await z.find({ hash: req.params.hash });
    console.log(fetchdata);
    console.log("HELLO WORLD");
    if (fetchdata.length != 0) {

        res.redirect(fetchdata[0].url);
    }
    else {
        res.send(404);
    }


})

// const geturl = async (req, res) => {
//     try {
//         const fetchdata = await z.find({ url: req.params.url });
//         //console.log(fetchdata[0].url);
//         // const user = await .find();
//         // response.status(200).json(url);
//     } catch (error) {
//         response.status(404).json({ message: error.message })
//     }







app.post('/', addurl);

// app.get('/:url', geturl);

app.get('/', (req, res) => {
    res.send("HELOO");
})

const url = 'mongodb://user:123@cluster0-shard-00-00.vnfe8.mongodb.net:27017,cluster0-shard-00-01.vnfe8.mongodb.net:27017,cluster0-shard-00-02.vnfe8.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-eg6j6l-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT ||'4000';

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
    app.listen(PORT, () => console.log('DB connected successfully'))
}).catch(err => {
    console.error('FAILED TO CONNECT', err);
})

