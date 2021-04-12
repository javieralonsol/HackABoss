'use strict';

const jwt = require('jsonwebtoken');

const usersRepository = require('../repositories/users-repository.js');
const errorsManage = require('../errors/errors-manage.js');

async function authValidate(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer')) {
      errorsManage.throwError(403, 'Authorization required. Please login');
    }

    const jwtData = jwt.verify(authorization.split(' ')[1], process.env.JWT_SECRET, { expiresIn: '30d' });

    const user = await usersRepository.userFindByEmail(jwtData.email);
    if (!user) {
      errorsManage.throwError(403, 'User account not found. Please login');
    }

    req.auth = jwtData;
    next();
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = authValidate;
