'use strict';

const axios = require('axios');
const bcrypt = require('bcryptjs');

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

async function adminCreateServicesFromTodoespertos(req, res) {
  try {
    if (req.auth.role !== 'admin') {
      errorsManage.throwError(403, 'You do not have permission to perform this');
    }
    res.send('OK Admin');
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = adminCreateServicesFromTodoespertos;
