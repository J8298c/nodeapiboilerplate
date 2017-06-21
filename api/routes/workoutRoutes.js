'use strict';

module.exports = (app) => {
  const workoutsController = require('../controllers/workoutsController');

  app.route('/workouts')
      .get(workoutsController.list_all_workouts)
      .post(workoutsController.create_a_workout);

  app.route('/workouts/:workoutid')
      .get(workoutsController.read_a_workout)
      .put(workoutsController.update_a_workout)
      .delete(workoutsController.delete_a_workout)
};