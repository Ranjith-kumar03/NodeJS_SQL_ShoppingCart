const express =  require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const port = 3000
const api = require('./Router/api')
const app = express()
app.use(bodyparser.json())
app.use(cors())

app.listen(port, function(){

    console.log("Server is Running on Port - "+port)
})

app.use("/api",api)
