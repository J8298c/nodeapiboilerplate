const Workout = require('../models/workout_model');

exports.get_all_workouts = (req, res)=>{
  Workout.find({}, (err, workouts)=>{
      if(err){
          res.send(err);
      } else {
          res.json(workouts);
      }
  })
};

exports.add_a_workout = (req, res) =>{
  const new_workout = new Workout({
      name: req.body.name,
      reps: req.body.reps,
      sets: req.body.sets
  });
  new_workout.save((err, workout)=>{
      if(err){
          console.log(err);
      } else {
          console.log(workout);
          res.json(workout);
      }
  })
};

exports.get_a_workout = (req, res) => {
    console.log(req.params, 'the params');
   Workout.findOne({name: req.params.name}, (err, workout)=>{
       if(err){
           console.log(err);
       } else {
           console.log(workout);
           res.json(workout);
       }
   })
}

exports.edit_a_workout = (req, res) => {
    Workout.findOneAndUpdate({id: req.params.id},{$set:{reps: req.body.reps, sets: req.body.sets}}, {new: true, upsert:true}, (err, workout)=>{
     if(err){
         console.log(err);
     } else {
         console.log('updated workout');
         res.json(workout);
     }

    })
}

exports.delete_a_workout = (req, res) => {
    Workout.findOneAndRemove({id: req.params.id}, (err, message)=>{
        if(err){
            console.log(err)
        } else {
            res.send({message: 'Workout has been deleted'})
        }
    })
}

