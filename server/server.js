const express =  require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const port = 3000
const product = require('./Router/product')
const cart = require('./Router/cart')

const app = express()
app.use(bodyparser.json())
app.use(cors())

app.listen(port, function(){

    console.log("Server is Running on Port - "+port)
})

app.use("/product",product)
app.use("/cart",cart)

