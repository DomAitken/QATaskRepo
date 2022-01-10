const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Game } = require('../models/games.js')
const server = require('../index.js')
chai.use(chaiHttp);

describe('Route testing', function() {
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
    })
})