const express = require('express');
const User = require("../models/User")
const Task = require("../models/Task")
const router = express.Router();
const verifyToken = require("./verifyToken")


router.post("/",verifyToken,async(req,res)=>{
     const newTask = new Task(req.body);
     try {
        const savedTask = newTask.save();
        res.status(200).json(savedTask)
     } catch (err) {
        res.status(500).json(err)
     }
})


router.put("/:taskId",verifyToken,async(req,res)=>{
    
    try {
       const updateTask = await Task.findByIdAndUpdate(req.params.taskId,{$set:req.body},{new:true});
       res.status(200).json(updateTask)
    } catch (err) {
       res.status(500).json(err)
    }
})


router.delete("/:taskId",verifyToken,async(req,res)=>{
    
    try {
       await Task.findByIdAndDelete(req.params.taskId);
       res.status(200).json("Task has been deleted")
    } catch (err) {
       res.status(500).json(err)
    }
})

router.get("/:taskId",verifyToken,async(req,res)=>{
    
    try {
      const task =  await Task.findById(req.params.taskId);
       res.status(200).json(task)
    } catch (err) {
       res.status(500).json(err)
    }
})

router.get("/",verifyToken,async(req,res)=>{
    
    try {
      const tasks =  await Task.find();
       res.status(200).json(tasks)
    } catch (err) {
       res.status(500).json(err)
    }
})

module.exports = router