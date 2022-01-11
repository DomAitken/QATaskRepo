const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Game } = require('../models/games.js')
const server = require('../index.js')
chai.use(chaiHttp);

describe('Route testing', function() {

    let testID;

    before(function(done) {
        console.log("Setup of environment.");
        const testGame = new Game({
            "gameName": "test name",
            "genre": "test genre",
            "isGood": true
        });
        testGame.save().then((result) => {
            testID = result._id.toString();
            done();
        });
    });

    after(function(done) {
        Game.deleteMany({}).then(() => {
            console.log("Everything deleted.");
            done();
        })
    })

    const testGame = {
        gameName: "testName",
        genre: "testGenre",
        isGood: true
    }

    it('Should respond with "Test path successful"', function(done) {
        chai.request(server)
            .get('/games/test')
            .end((err, res) => {
                if (err) {
                    console.log("Error ocurred.");
                    done(err);
                };
                expect(res).to.have.status(201);
                expect(res).to.not.be.null;
                expect(res).to.have.property('text', "Test path successful");
                done();
            });
    });

    it('Should post data to the database and return <name> added to the database', function(done) {
        chai.request(server)
            .post('/games/post')
            .send(testGame)
            .end((err, res) => {
                if (err) {
                    console.log("Error ocurred.");
                    done(err);
                };
                expect(res).to.have.status(201);
                expect(res).to.not.be.null;
                expect(res).to.have.property('text', `${testGame.gameName} added to database.`);
                done();
            })
    });

    it('Should return all games from the database', function(done) {
        chai.request(server)
            .get('/games/getAll')
            .end((err, res) => {
                if (err) {
                    console.log("Error ocurred.");
                    done(err);
                };

                const resBody = res.body;
                expect(res).to.have.status(200);
                expect(resBody).to.not.be.null;
                resBody.map((games) => {
                    expect(games).to.be.a("Object");
                    expect(games).to.contain.keys("gameName");
                });
                done();
                console.log(resBody);
            });
    });

    it('Should delete an item from the database that has been chosen by ID', function(done) {
        chai.request(server)
            .delete('/games/delete/:id')
            .end((err, res) => {
                if (err) {
                    console.log("Error Ocurred.");
                    done(err);
                };
                expect(res).to.have.status(200);
                expect(res).to.not.be.null;
                expect(res).to.have.property('text', `Game has been deleted.`)
            })
    });

    it('Should retrieve a single record from the database', function(done) {
        chai.request(server)
            .get('/games/get/:id')
            .end((err, res) => {
                if (err) {
                    console.log("Error Ocurred.");
                    done(err);
                };

                const resBody = res.body;
                expect(res).to.have.status(200);
                expect(resBody).to.not.be.null;
                resBody.map((games) => {
                    expect(games).to.be.a("Object");
                    expect(games).to.contain.keys("gameName");
                    done();
                });
                console.log(resBody);
            });
    });
});