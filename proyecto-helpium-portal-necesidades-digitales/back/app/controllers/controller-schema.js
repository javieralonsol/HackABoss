"use strict";

const usersRepository = require('../../repositories/users-repository.js');
const servicesRepository = require('../../repositories/services-repository.js');
const solutionsRepository = require('../../repositories/solutions-repository.js');
const errorsManage = require('../errors/errors-manage.js');

async function @@@###@@@(req, res) {
  try {

    res.send('OK');

  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = @@@###@@@(;
