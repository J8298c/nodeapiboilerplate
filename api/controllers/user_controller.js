const User = require('../models/user_model');
const passport = require('passport');

exports.add_a_user = (passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true,
}));

exports.get_a_user = (passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
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

exports.go_to_profile = (req, res) => {
  res.send('user profile page');
};
