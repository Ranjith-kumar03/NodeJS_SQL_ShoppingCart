const express =  require('express')
const db =require('../DB/baseDBConnection')
const router3 = express.Router()

router3.get('/wishlists', async (req, res ,next)=>{
    try{
        let results = await db.getwishlist()
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }

})

router3.get('/:id', async (req, res ,next)=>{
    try{
        let results = await db.getOne(req.params.id)
        console.log("i  am in wish list")
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }

})

router3.post('/addwishlist', async (req, res)=>{
    try{
        let results = await db.addWishList(req.body.id,req.body.product_id)
        console.log("i  am in add wish list")
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

/* router3.put('/updatewishlist/:id', async (req, res)=>{
    try{
        let results = await db.updateOne(req.params.id, req.body.name,req.body.description,req.body.price,req.body.imageUrl)
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}) */
router3.delete('/deletewishlist/:id', async (req, res)=>{
    try{
        let results = await db.deletewishlist(req.params.id)
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

/////////////////////////////////// wish list////////////////////////////////////////////////////////////////////////////////////router.post('/Cartadd', async (req, res)=>{

module.exports = router3
