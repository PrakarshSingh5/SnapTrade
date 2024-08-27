const express=require("express");
const router=express.Router();

router.post("/api", (req, res)=>{
    res.send("yes");
})

module.exports = router;