import express from "express";
const router = express.Router();
router.get('/',(trq,res) =>{
    res.send("This works");
})
