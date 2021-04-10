'use strict';

const Joi = require('joi');
const bcrypt = require('bcryptjs');
const cryptoRandomString = require('crypto-random-string');

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');
const emailSender = require('../../helpers/email-sender.js');
const createAvatarInitials = require('../../helpers/createAvatarInitials.js');

const schema = Joi.object().keys({
  name: Joi.string().min(2).max(50).required(),
  surname: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().max(254).required(),
  password: Joi.string()
    .min(6)
    .max(8)
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[a-zA-Z0-9]{3,}$/)
    .messages({
      'string.pattern.base': '"password" must have at least one number, one lowercase, one uppercase and no spaces',
    })
    .required(),
});

async function userRegister(req, res) {
  try {
    Object.keys(req.body).map(
      (key) => (req.body[key] = typeof req.body[key] === 'string' ? req.body[key].trim() : req.body[key])
    );

    await schema.validateAsync(req.body);

    const { name, surname, email, password } = req.body;

    if (await usersRepository.userFindByEmail(email)) {
      errorsManage.throwError(409, `"email" A user with that email already exists`);
    }

    let role = 'user';
    if (email === process.env.ADMIN_PASSWORD_1 || email === process.env.ADMIN_PASSWORD_2) {
      role = 'admin';
    }

    const verificationCode = await cryptoRandomString({ length: 64 });

    const imageLetters = name[0].toLowerCase() + surname[0].toLowerCase();

    const id = await usersRepository.userRegister({
      ...req.body,
      password: await bcrypt.hash(password, 12),
      image: `${imageLetters}.svg`,
      role: role,
      verification_code: verificationCode,
    });

    createAvatarInitials(imageLetters);

    if (await emailSender.emailSendRegistration(name, email, verificationCode)) {
      res.status(201).send({
        id,
        name,
        surname,
        email,
        role,
        message: 'We have sent you an email with a link to activate your account',
      });
    } else {
      await usersRepository.userDeleteById(id);
      errorsManage.throwError(500, 'We could not send the verification email so please try later');
    }
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = userRegister;
