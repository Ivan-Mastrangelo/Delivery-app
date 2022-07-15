const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (payload) => {
const secretKey = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const token = jwt.sign(payload, secretKey, jwtConfig);

return token;
};

module.exports = createToken;