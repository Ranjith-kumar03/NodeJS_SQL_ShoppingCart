const express =  require('express')
const db =require('../DB/baseDBConnection')
const router2 = express.Router()





router2.post('/addCarts', async (req, res ,next)=>{
  try{
      let results = await db.CartaddOne(req.body.id,req.body.productId,req.body.productName,req.body.qty,req.body.price)
      res.json(results)
  } catch(e){
      console.log(e)
      res.sendStatus(500)
  }
  })


  router2.get('/getCarts', async (req, res ,next)=>{
  try{
      let results = await db.getcarts()
      res.json(results)
  } catch(e){
      console.log(e)
      res.sendStatus(500)
  }

  })

  router2.delete('/deleteCart/:id', async (req, res)=>{
    try{
        let results = await db.cartdelete(req.params.id)
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

router2.put('/updateCartItem/:id', async (req, res)=>{
  try{
      let results = await db.updateOne(req.params.id, req.body.productId,req.body.productName,req.body.qty,req.body.price)
      res.json(results)
  } catch(e){
      console.log(e)
      res.sendStatus(500)
  }
})

  module.exports = router2
