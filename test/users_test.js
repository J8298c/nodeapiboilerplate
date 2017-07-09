const mongoose = require('mongoose');
const mocha = require('mocha');
const chai = require('chai');
const express = require('express');
const assert = require('assert');
const faker = require('faker');
const chaiHttp = require('chai-http');

const User = require('../api/models/user_model');

const port = process.env.PORT || 8080;

const testDB = 'mongodb://localhost/apollotesting';
const should = chai.should();
const app = express();
chai.use(chaiHttp);

function seedData() {
  const email = faker.internet.email;
  const password = faker.lorem.word;
  const seedUsers = [];

  for (let i = 0; i <= 4; i++) {
    seedUsers.push({
      email,
      password,
    });
  }
  User.insertMany(seedUsers);
}

function runServer(databaseUrl) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      app.listen(port, () => {
        console.log(`app is listening on port ${port}`);
        resolve();
      })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function eraseDB() {
  return new Promise((resolve, reject) => {
    console.warn('Deleting database');
    mongoose.connection.db.dropDatabase()
      .then(result => resolve(result))
      .catch(err => reject(err));
  });
}

function closeServer() {
  return mongoose.disconnect()
    .then(() => new Promise((resolve, reject) => {
      console.log('closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    }));
}

describe('testing user endpoints', () => {
  before(() => {
    runServer(testDB);
  });
  beforeEach(() => {
    seedData();
  });
  afterEach(() => {
    eraseDB();
  });
  after(() => {
    closeServer();
  });
  describe('Workout Post request', () => {
    it('should save a workout to the DB', () => {
      let res;
      chai.request(app)
        .post('/signup', { email: faker.name.firstName(), password: faker.lorem.word() })
        .then(_res => {
          res = _res;
          res.should.have.status(200);
          res.should.be.json;
          res.should.be.a('object');
          res.should.include.keys('email', 'password');
          assert.equal(count, 5);
        });
    });
  });
  describe('Workout Put request', () => {
    it('should add new workout to db for testing', () => {
      let res;
      chai.request(app)
        .post('/signup', { email: faker.name.firstName(), password: faker.lorem.word() });
    });
    it('should find created workout and edit reps field', () => {
      chai.request(app)
        .put('/edit/:name', { name: 'benchpress', reps: 210, sets: faker.random.number() })
        .then(_res => {
          res.should.have.status(204);
          res.should.json;
          res.should.be.a('object');
        });
      return chai.request(app);
    });
  });
  describe('Workout Delete request', () => {
    it('should add new workout to the db for test', () => {
      let res;
      chai.request(app)
        .post('/signup', { email: 'eddy', password: faker.lorem.word() });
    });
    it('should find recently created and delete it', () => {
      let res;
      chai.request(app)
        .delete('/delete', { email: 'eddy' })
        .then(_res => {
          res = _res;
          res.should.have.status(200);
          assert.equal(count, 4);
        });
      console.log('workout deleted');
    });
  });
});

