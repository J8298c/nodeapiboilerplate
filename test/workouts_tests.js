const mongoose = require('mongoose');
const mocha = require('mocha');
const chai = require('chai');
const app = require('../server');
const Workout = require('../api/models/workoutModel');
const assert = require('assert');
const faker = require('faker');
const chaiHttp = require('chai-http');
const testDB = 'mongodb://localhost/apollotesting';
const should = chai.should();
chai.use(chaiHttp);

function seedWorkouts(){
    const seedData = [];
    const name = faker.name.firstName();
    const reps = faker.random.number();
    const sets = faker.random.number();
    for(let i = 0; i < 4; i++){
        seedData.push({
            name: name,
            reps: reps,
            sets: sets
        })
    }
    Workout.insertMany(seedData, (err, workout)=>{
        if(err){
            console.log(err);
        } else {
            console.log(`saved ${workout}`);
        }
    });
}

let server;
function runServer(DBurl, port){
    return new Promise((resolve, reject)=>{
        mongoose.connect(DBurl, err => {
            if(err){
                return reject(err);
            }
            server = app.listen(port, ()=>{
                console.log(`listening on port ${port}`);
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
        console.warn('Deleting DB');
        mongoose.connection.dropDatabase()
            .then(result => resolve(result))
            .then(result => resolve(result))
            .catch(err => reject(err))
    });
}

function closeServer(){
    return mongoose.disconnect()
        .then((err)=>{
            if (err){
                console.log(err);
            } else {
                return new Promise((resolve, reject)=>{
                    console.log('closing server');
                    server.close( err=>{
                        if(err){
                            return reject(err);
                        } else {
                            resolve();
                        }
                    })
                })
            }
        })//need try and catch block alongside then
}

describe('testing workout endpoints', ()=>{
    before(()=>{
        return runServer(testDB, port)
    });
});
describe('testing the runServer function', ()=>{
    it('should start the test server', ()=>{
        return runServer(testDB, port);
    })
});
describe('testing seedWorkouts function', ()=>{
    it('should add workouts to the DB', ()=>{
        runServer(testDB, port);
        return seedWorkouts()
    })
});
describe('testing the erase db function', ()=>{
    it('should drop the database', ()=>{
        runServer(testDB, port);
        return eraseDB();
    })
});
describe('testing the closeServer function', ()=>{
    it('should close the server', ()=>{
        runServer(testDB, port);
        return closeServer();
    })
});


describe('Testing Endpoints for api', ()=> {
    before('Starts the server and DB', () => {
        runServer(testDB, port);
    });
    after('Closes the server', () => {
        closeServer();
    });
    beforeEach('Adds workouts to the DB', () => {
        seedWorkouts();
    });
    afterEach('Drops the test DB to start fresh', () => {
        eraseDB();
    });
    )}

