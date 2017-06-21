'use strict';
const mongoose = require('mongoose');
const Workout = mongoose.model('Workouts');

exports.list_all_workouts = (req, res) => {
  Workout.find({}, (err, workout)=>{
      if(err){
          return res.send(err);
      } else {
          res.json(workout);
      }
  })
};

exports.create_a_workout = (req, res)=>{
  const new_workout  = new Workout(req.body);
  new_workout.save((err, workout)=>{
     if(err){
         return res.send(err);
     } else {
         res.json(workout);
     }
  });
};

exports.read_a_workout = (req, res)=>{
  Workout.findById(req.params.workoutId, (err, workout)=>{
      if(err){
          return res.send(err);
      } else {
          res.json(workout);
      }
  })
};

exports.update_a_workout = (req, res) => {
    Workout.findOneAndUpdate(req.params.workoutId, req.body, {new: true}, (err, workout)=>{
        if(err){
            return res.send(err);
        } else {
            res.json(workout);
        }
    })
};

exports.delete_a_workout = (req, res) => {
    Workout.remove({
        _id: req.params.workoutId
    }, (err, workout)=>{
        if(err){
            return res.send(err);
        } else {
            res.json({ message: 'Task successfully deleted'});
        }
    });
};