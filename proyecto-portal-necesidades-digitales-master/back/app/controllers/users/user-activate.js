'use strict';

const Joi = require('joi');

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');
const authCreate = require('./user-auth-create.js');

const schema = Joi.object().keys({
  verification_code: Joi.string().min(64).max(72).required(),
  email: Joi.string().email().required(),
});

async function userActivate(req, res) {
  try {
    await schema.validateAsync(req.query);

    const { email, verification_code } = req.query;

    if (await usersRepository.userActivate([email, verification_code])) {
      const user = await usersRepository.userFindByEmail(email);

      await authCreate(user, res);
    } else {
      errorsManage.throwError(400, 'Verification failed or already actived');
    }
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = userActivate;
