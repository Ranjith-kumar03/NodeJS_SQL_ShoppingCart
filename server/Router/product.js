const express =  require('express')
const db =require('../DB/baseDBConnection')
const router1 = express.Router()

router1.get('/products', async (req, res ,next)=>{
    try{
        let results = await db.all()
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }

})

router1.get('/:id', async (req, res ,next)=>{
    try{
        let results = await db.getOne(req.params.id)
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }

})

router1.post('/add', async (req, res)=>{
    try{
        let results = await db.addOne(req.body.iD,req.body.name,req.body.description,req.body.price,req.body.imageUrl)
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

router1.put('/update/:id', async (req, res)=>{
    try{
        let results = await db.updateOne(req.params.id, req.body.name,req.body.description,req.body.price,req.body.imageUrl)
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})
router1.delete('/delete/:id', async (req, res)=>{
    try{
        let results = await db.delete(req.params.id)
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

/////////////////////////////////// Cart Item ////////////////////////////////////////////////////////////////////////////////////router.post('/Cartadd', async (req, res)=>{

module.exports = router1
