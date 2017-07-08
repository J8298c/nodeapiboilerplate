module.exports = app => {
  const WorkoutController = require('../controllers/workout_controller');
  app.route('/workouts')
    .get(WorkoutController.get_all_workouts)
    .post(WorkoutController.add_a_workout);

  app.route('/workouts/:id')
    .get(WorkoutController.get_a_workout)
    .put(WorkoutController.edit_a_workout)
    .delete(WorkoutController.delete_a_workout);
};
