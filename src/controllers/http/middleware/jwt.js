// const dotenv = require('dotenv');
const jwt = require('express-jwt');
const SECURITY_CONFIG = require('../../../config/security.json');

const jwtSetup = {
    secret: process.env.JWT_TOKEN,
    algorithms: SECURITY_CONFIG.JWT.algorithms
};

module.exports = function(req, res, next) {
    jwt(jwtSetup);
};