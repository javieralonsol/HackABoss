'use strict';

const Joi = require('joi');
const bcrypt = require('bcryptjs');
const path = require('path');

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');
const createAvatarInitials = require('../../helpers/createAvatarInitials.js');

const schema = Joi.object().keys({
  name: Joi.string().min(2).max(50),
  surname: Joi.string().min(2).max(100),
  email: Joi.string().email().max(254),
  password: Joi.string()
    .min(6)
    .max(12)
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[a-zA-Z0-9]{3,}$/)
    .messages({
      'string.pattern.base': '"password" must have at least one number, one lowercase, one uppercase and no spaces',
    }),
  topic: Joi.string().allow('').max(254),
  bio: Joi.string().allow('').max(5000),
});

async function userUpdate(req, res) {
  try {
    Object.keys(req.body).map(
      (key) => (req.body[key] = typeof req.body[key] === 'string' ? req.body[key].trim() : req.body[key])
    );

    await schema.validateAsync(req.body);

    const { services, solutions, ...user } = await usersRepository.userFindById(req.auth.id);

    if (req.body.email && user.email != req.body.email) {
      if (await usersRepository.userFindByEmail(req.body.email)) {
        errorsManage.throwError(409, `A user with email ${req.body.email} already exists`);
      }
    }

    const reqCopy = req;

    if (req.body.password) {
      reqCopy.body.password = await bcrypt.hash(req.body.password, 12);
    }

    const updatedUser = {
      ...user,
      ...reqCopy.body,
    };
    // solo si no hay image webp!!
    if (user.name !== updatedUser.name || user.surname !== updatedUser.surname) {
      const imageLetters = updatedUser.name[0].toLowerCase() + updatedUser.surname[0].toLowerCase();
      createAvatarInitials(imageLetters);

      if (path.extname(user.image) === '.svg') {
        updatedUser.image = `${imageLetters}.svg`;
      }
    }

    await usersRepository.userUpdate(updatedUser, user.id);

    const { password, image, ...userToSend } = updatedUser;

    userToSend.image = `${process.env.SERVER_DOMAIN}/media/profiles/${updatedUser.image}`;

    res.send(userToSend);
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = userUpdate;
