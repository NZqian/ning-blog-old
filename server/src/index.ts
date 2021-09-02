import { Router } from 'express'
import * as bodyParser from 'body-parser'
import { Db, MongoClient } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const connection = client.connect()

function insertDynamic(time: string, title: string, content: string) {
    console.log("got param", time, title, content)
    connection.then(() => {
        client.db("ning-blog").collection("dynamics").insertOne({ "time": time, "title": title, "content": content }, function (err, res) {
            if (err) throw err
            console.log("insert success")
        })
    })
}
/*
async function getDynamics() : object {
    let dynamics: Document[] | undefined
}
*/

const router = Router()
router.post('/publish-dynamic', function (req, res) {
    insertDynamic(req.body.time, req.body.title, req.body.content)
    //getDynamics()
    console.log(req.body)
    res.end("got post")
})

router.get('/test', function (req, res) {
    console.log(req.headers)
    res.end("hello world")
})

router.get('/get-dynamics', function (req, res) {
    connection.then(() => {
        client.db("ning-blog").collection("dynamics").find().toArray(function (err, result) {
            if (err) throw err
            res.json(result)
            //return result
        })
    })
})

router.post('/login', function (req, res) {
    connection.then(() => {
        client.db("ning-blog").collection("users").find({ "username": req.body.username, "password": req.body.password }).toArray(function (err, result) {
            if (err) throw err
            console.log(result?.length)
            if (result?.length) {
                res.end("success")
            } else {
                res.end("fail")
            }
        })
    })
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
app.listen(443, function () {
    console.log("server running")
})
