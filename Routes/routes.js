const router = require('express').Router()
const fs = require('fs')
// const app = express()

    router.get('/',(req, res)=>{
    try{

        // const result  = req.body()
        res.writeHead(200, {"Content-type":'text/html'})
        const file = fs.readFileSync('index.html')
        res.end(file)
        // res.send('ffffs')
        // res.send('OK ')
       
    }
    catch{
        res.writeHead(404,'Not Found')
        res.end()
    }
    return router
})

module.exports = router