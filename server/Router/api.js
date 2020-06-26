const express =  require('express')
const db =require('../DB/index')
const router = express.Router()

router.get('/', async (req, res ,next)=>{
    try{
        let results = await db.all()
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }

})

router.get('/:id', async (req, res ,next)=>{
    try{
        let results = await db.getOne(req.params.id)
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }

})

router.post('/add', async (req, res)=>{
    try{
        let results = await db.addOne(req.body.iD,req.body.name,req.body.description,req.body.price,req.body.imageUrl)
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

router.put('/update/:id', async (req, res)=>{
    try{
        let results = await db.updateOne(req.params.id, req.body.name,req.body.description,req.body.price,req.body.imageUrl)
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})
router.delete('/delete/:id', async (req, res)=>{
    try{
        let results = await db.delete(req.params.id)
        res.json(results)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})
module.exports = router
