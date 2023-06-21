const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')
const {Mongoose} = require('mongoose')



    // app.use('/user/:id', (req, res, next) => {
    //     console.log('Request Type:', req.method)

    //     console.log('userId',req.params.id);
    //     console.log('Original URL',req.originalUrl);
    //     next()
    //   },(req, res)=>{
    //     res.json({
    //         name: 'Anwar',
    //         age:21,
    //         gender:'male',

    //     })
    //   })


// to skip the middleware function when the id is 0
      app.get('/user/:id', (req, res, next) => {
        // if the user ID is 0, skip to the next route
        if (req.params.id === '0') next('route')
        // otherwise pass the control to the next middleware function in this stack
        else next()
      }, (req, res, next) => {
        // send a regular response
        res.send('regular')
      })
      
      // handler for the /user/:id path, which sends a special response
      app.get('/user/:id', (req, res, next) => {
        res.send('special')
      })
      

    //in this funcation the second one which has the same route will never run because it already end the response in first one
    // app.get('/user/:id', (req, res, next) => {
    //     console.log('ID:', req.params.id)
    //     next()
    //   }, (req, res, next) => {
    //     res.send('User Info')
    //   })
      
    //   // handler for the /user/:id path, which prints the user ID
    //   app.get('/user/:id', (req, res, next) => {
    //     res.send(req.params.id)
    //   })

app.listen(8080,(err)=>{
    if(err){
        console.log('error');
    }else{
        console.log('Listning on port 8080');
    }
})