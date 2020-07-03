const express =  require('express')
const db =require('../DB/baseDBConnection')
const router2 = express.Router()





router2.post('/addCarts', async (req, res ,next)=>{
  try{
    console.log("added to cart now")
      let results = await db.CartaddOne(req.body.id,req.body.productId,req.body.productName,req.body.qty,req.body.price)
      res.json(results)
  } catch(e){
      console.log(e)
      res.sendStatus(500)
  }
  })


  router2.get('/getCarts', async (req, res ,next)=>{
  try{
    console.log("get from cart")
      let results = await db.getcarts()
      res.json(results)
  } catch(e){
      console.log(e)
      res.sendStatus(500)
  }

  })

//   router2.delete('/deleteCarts/:id', async (req, res)=>{
//     try{
//       console.log("delete cart triggered")
//         let results = await db.cartdelete(req.params.id)
//         res.json(results)
//     } catch(e){
//         console.log(e)
//         res.sendStatus(500)
//     }
// })

router2.delete('/deleteCarts/:id', async (req, res)=>{
  console.log("really stupid")
  try{
          console.log("delete cart triggered")
          let results = await db.cartdelete(req.params.id)
           res.json(results)
       } catch(e){
          console.log(e)
          res.sendStatus(500)
      }
})
  module.exports = router2
