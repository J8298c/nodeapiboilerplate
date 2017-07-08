module.exports = (app, passport) => {
  const UserController = require('../controllers/user_controller');
  app.route('/signup')
    .post(UserController.add_a_user);

  app.route('/login')
    .get(UserController.get_a_user)
    .delete(UserController.delete_a_user);

  app.route('/profile')
    .get(UserController.go_to_profile);
};
