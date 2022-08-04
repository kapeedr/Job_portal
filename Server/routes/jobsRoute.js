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
    console.log(req.body);
    res.status(201).send("created user");
})




module.exports = router;