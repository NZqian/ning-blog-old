import { Router } from 'express'
import * as bodyParser from 'body-parser'
import { MongoClient } from 'mongodb'
const mongoclient = MongoClient

mongoclient.connect("127.0.0.1:27017", function (err, client) {
    client?.db("").admin()
})

const router = Router()
router.post('/publish-dynamic', function (req, res) {
    console.log(req.body)
    res.end("got post")
})

router.get('/test', function (req, res) {
    console.log(req.headers)
    res.end("hello world")
})

import express from 'express'
const app = express()
app.all('*', function (req, res, next) {
    //设为指定的域
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', "true");
    res.header("X-Powered-By", ' 3.2.1');
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', router)
app.listen(8888, function () {
    console.log("server running")
})