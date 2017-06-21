'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    reps: {
        required: true,
        type: Number
    },
    sets: {
        required: true,
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Workouts', workoutSchema);