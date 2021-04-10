'use strict';

const Joi = require('joi');
const bcrypt = require('bcryptjs');

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');
const authCreate = require('./user-auth-create.js');

const schema = Joi.object().keys({
  email: Joi.required(),
  password: Joi.required(),
});

async function userLogin(req, res) {
  try {
    await schema.validateAsync(req.body);

    const user = (await usersRepository.userFindByEmail(req.body.email)) || {
      password: '',
    };
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);

    if (!user || !isValidPassword) {
      errorsManage.throwError(403, 'Login failed');
    }

    if (!user.verification_code.startsWith('verified')) {
      errorsManage.throwError(403, 'Account still not verified. Please check your email inbox');
    }

    await authCreate(user, res);
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = userLogin;
