const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const workoutRoutes = require('../api/routes/workout_routes');
const faker = require('faker');
const Workout = require('../api/models/workout_model');
const should = require('chai').should();
const assert = require('assert');

workoutRoutes(app);
chai.use(chaiHttp);

function seedWorkouts(){
    const workouts = [];
    const name = faker.name.firstName();
    const reps = faker.random.number();
    const sets = faker.random.number();

    for(let i = 0; i < 5; i++){
        workouts.push({
            name: name,
            sets: sets,
            reps: reps
        });
    }
    Workout.insertMany(workouts);
}

function clearDB(){
    return new Promise((resolve, reject)=>{
        console.warn('dropping DB');
        mongoose.connection.dropDatabase()
            .then(result => resolve(result))
            .catch(err => reject(err))
    });
}

function closeServer(){
    return new Promise((resolve, reject)=>{
        console.log('Closing server');
        app.close(err => {
            if (err) {
                reject(err);
                // so we don't also call `resolve()`
                return;
            }
            resolve();
        });
    });
}

describe('test api', ()=>{
    beforeEach(()=>{
        seedWorkouts();
    })
    afterEach(()=>{
        clearDB();
    })
    after(()=>{
        closeServer();
    })
    describe('/GET', ()=>{
        it('should return all the workouts in the db', (done)=>{
            chai.request(app)
                .get('/workouts')
                .end((err, res)=>{
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
        });
    });
    describe('/POST', ()=>{
        it('should add a user to the db', (done)=>{
            chai.request(app)
                .post('/workouts', {name: 'benchpress', sets: 4, reps: 4})
                .end((err, res)=>{
                    res.should.have.status(200);
                })
            done();
        })
    })
})


