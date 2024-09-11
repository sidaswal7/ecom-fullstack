const express = require(`express`);

const User = require(`../models/users`);

const router = express.Router();

router.post("/", async (req,res,next)=>{
    try{
        console.log(req.body);
        let user = await User.create(req.body);
        user = user.toObject();
        delete user.password;
        res.send(user);
        
    }catch(err){
        console.log(err)
    }
})
module.exports = router;