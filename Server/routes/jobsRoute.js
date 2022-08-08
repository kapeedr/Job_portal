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

router.get("/sortbyTitle", async(req,res) => {
    try{
        const jobs = await Job.find({}).sort("title");
        res.send(jobs);
    } catch(error){
        return res.status(400).json({error});
    }
});
router.get("/sortbyCompany", async(req,res) => {
    try{
        const jobs = await Job.find({}).sort("company");
        res.send(jobs);
    } catch(error){
        return res.status(400).json({error});
    }
});

router.get("/sortbytime", async(req,res) => {
    try{
        const jobs = await Job.find({}).sort({createdAt:-1});
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


router.put("/editJob/:id", async(req, res) => {
    const thing = new Job(req.body);

    Job.updateOne({_id: req.params.id}, thing).then(
        () => {
          res.status(201).json({
            message: 'Thing updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
})











module.exports = router;