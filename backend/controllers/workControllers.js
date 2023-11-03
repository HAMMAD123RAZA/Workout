const work = require('../models/work');
const mongoose=require('mongoose');
// get all workout
const getAllWorkout=async(req,res)=>{
    const all=await work.find({}).sort({createdAt:-1});
    res.json(all);
}

// get a single workout
const singleWorkout=async(req,res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error:'no such workout'})
    }

    const single=work.findById({id})

    if(!single){
        res.json({error:'not found'})
    }

    res.json(single)
}

// create a new workout
const createWorkout=async (req,res)=>{
    try {
        const {title,reps,load}=req.body;
        const workout=await work.create({title,reps,load})
        res.json(workout)
    } catch (error) {
    res.json({error})
    }
}

// delete a workout
const deleteWorkout=async(req,res)=>{
const {id}=req.params;
if(!mongoose.Types.ObjectId.isValid(id))
{
    res.status(404).json({error:'no such id'})
}
const del=await work.findOneAndDelete({_id:id});
if(!del){
    res.json({error:'no such workout'})
}
res.json(del)
}

// update a workout
const updateWorkout=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.json({error:'no such id'})
    }
    const upd=await work.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!upd){
        res.json({error:'no such workout'})
    }
    res.json(upd)

}

module.exports={createWorkout,getAllWorkout,singleWorkout,deleteWorkout,updateWorkout}