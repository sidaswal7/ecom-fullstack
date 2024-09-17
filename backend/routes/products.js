const express = require(`express`);
const Product = require(`../models/products`);

const router = express.Router();

router.get("/", async (req,res,next)=>{
    try{
        let products = await Product.find();
        console.log(products)
        res.send(products);

    } catch(err){
        console.log(err)
    }
})
router.delete("/:id", async (req,res,next)=>{
    let id = req.params.id;
    let result = await Product.findByIdAndDelete(id);
    console.log(result)
    res.send(result)

})

router.post("/add-products",async (req,res,next)=>{
    try{    
        let product = await Product.create(req.body);
        console.log(product)
        res.send(product);

    } catch(err){
        console.log(err);
    }
})

module.exports = router;