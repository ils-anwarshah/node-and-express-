const http = require('http')
const express = require('express')
const fs = require('fs')
const app = express()
const  {MongoClient , ServerApiVersion} = require('mongodb')
const  {Uri} = require('./const')

app.use('/', require('./Routes/routes'))

// app.get('/user', (req,res)=>{
//     res.send('user Page')
// })
// app.get('/',(req,res )=>{
//     res.send('This is HOME PAGE')
//     // res.end('Ok')
// })


app.listen(8080);