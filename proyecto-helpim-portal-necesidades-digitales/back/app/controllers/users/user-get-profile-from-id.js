'use strict';

const Joi = require('joi');

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const schema = Joi.object({
  id: Joi.number().positive().required(),
});

async function userGetProfileFromId(req, res) {
  try {
    await schema.validateAsync(req.params);

    const { id } = req.params;

    const { role, password, verification_code, hidden, ...user } = await usersRepository.userFindById(id);

    if (!user) {
      errorsManage.throwError(400, 'User does not exists');
    }

    user.image = `${process.env.SERVER_DOMAIN}/media/profiles/${user.image}`;

    res.send(user);
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = userGetProfileFromId;
