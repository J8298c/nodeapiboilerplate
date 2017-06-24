"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/thunderhammer');
const workoutRoute = require('./api/routes/workout_routes');
workoutRoute(app);
app.listen(port, ()=>{
   console.log(`app is listening on port ${port}`);
});

module.exports = app;