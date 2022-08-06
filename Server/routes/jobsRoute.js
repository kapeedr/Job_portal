const express = require("express");
const router = express.Router();
const Job = require('../model/jobModel');
router.get("/getalljobs", async(req,res) => {
    try{
        const jobs = await Job.find()
        res.send(jobs);
    } catch(error){
        return res.status(400).json({error});
    }
});

router.post("/create", async(req,res) => {

    const u = new Job(req.body);

    u.save(function(err) {
        if (err)
           throw err;
        else 
           console.log('save user successfully...');
    });
    res.status(201).send("created user");
})

router.delete("/deleteJob/:id", async(req, res) => {
    Job.deleteOne({_id:req.params.id}).then((result) =>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.warn(err)
    })
})













module.exports = router;