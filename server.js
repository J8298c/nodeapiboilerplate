'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/thunderhammer');
require('./config/passport')(passport);
const workoutRoute = require('./api/routes/workout_routes');
const userRoute = require('./api/routes/user_routes');

workoutRoute(app);
userRoute(app, passport);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

module.exports = { app, passport };
