const mongoose = require('mongoose');
const mocha = require('mocha');
const chai = require('chai');
const express = require('express');
const assert = require('assert');
const Workouts = require('../api/models/workoutModel');
const faker = require('faker');

const port = process.env.PORT || 8081;
const testDB = 'mongodb://localhost/apollotesting';
const should = chai.should();
const app = express();

function seedData(){
    let name = faker.name.firstName();
    let reps = faker.random.number();
    let sets = faker.random.number();
    let seededWorkouts = [];

    for(let i = 0; i < 4; i++){
        seededWorkouts.push({
            name: name,
            reps: reps,
            sets: sets
        });
    }
    Workouts.insertMany(seededWorkouts);
}

//setting up the server
let server;
function runServer(databaseUrl, port){
    return new Promise((resolve, reject)=>{
        mongoose.connect(databaseUrl, err =>{
            if(err){
                return reject(err);
            }
            server = app.listen(port, ()=>{
                console.log(`app is listening on port ${port}`);
                resolve();
            })
                .on('error', err =>{
                    mongoose.disconnect();
                    reject(err);
                })
        })
    })
}

function eraseDB(){
    return new Promise((resolve, reject)=>{
        console.warn('Deleting database');
        mongoose.connection.dropDatabase()
            .then(result => resolve(result))
            .catch(err => reject(err))
    });
}

function closeServer(){
    return mongoose.disconnect()
        .then(()=>{
            return new Promise((resolve, reject)=>{
                console.log('closing server');
                server.close(err =>{
                    if(err){
                        return reject(err);
                    }
                    resolve();
                });
            });
        });
}


//api test //

describe('Testing Api endpoints', ()=>{
    before(()=>{
        return runServer(testDB, port);
    });
    beforeEach(()=>{
        return seedData();
    });
    afterEach(()=>{
        return eraseDB();
    });
    after(()=>{
        return closeServer();
    });

    describe('User get request', ()=>{
        it('should return all users in the DB', ()=>{
            return Workouts.count();
        });
    })
});