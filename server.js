const express = require('express');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const Workout = require('./api/models/workoutModel');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res)=>{
   res.status(404).send({url: req.originalUrl + 'not found'});
});

mongoose.Promise = global.Promise;

mongoose.connect(db.url);

const routes = require('./api/routes/workoutRoutes');
routes(app);
app.listen(port, ()=>{
    console.log(`app is now listening on port ${port}`);
});

