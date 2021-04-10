'use strict';

const Joi = require('joi');

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');
const { number } = require('joi');

const schema = Joi.object().keys({
  limit: Joi.number().min(0),
  offset: Joi.number().positive().allow(0),
});

async function userGetAll(req, res) {
  try {
    await schema.validateAsync(req.query);
    const users = await usersRepository.userGetAll(req.query.limit, req.query.offset);

    users.map((user) => {
      user.role = '';
      user.password = '';
      user.verification_code = '';
      user.hidden = '';
      user.image = `${process.env.SERVER_DOMAIN}/media/profiles/${user.image}`;
      return user;
    })

    res.send(users);
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = userGetAll;
