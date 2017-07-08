const User = require('../models/user_model');
const passport = require('passport');

exports.add_a_user = (passport.authenticate('local-signup', {
  successRedirect: '/users/profile',
  failureRedirect: '/users/signup',
  failureFlash: true,
}));

exports.get_a_user = (passport.authenticate('local-login', {
  successRedirect: '/users/profile',
  failureRedirect: '/users/login',
  failureFlash: true,
}));

exports.delete_a_user = (req, res) => {
  User.findOneAndRemove({ email: req.params.email }, (err, message) => {
    if (err) {
      console.error(err);
    } else {
      console.log('user deleted');
    }
  });
};
