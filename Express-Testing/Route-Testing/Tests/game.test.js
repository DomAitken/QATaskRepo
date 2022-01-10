const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Game } = require('../models/games.js')
chai.use(chaiHttp);