'use strict';

const Joi = require('joi');
const cryptoRandomString = require('crypto-random-string');

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');
const emailSender = require('../../helpers/email-sender.js');

const schema = Joi.object().keys({
  email: Joi.string().email().required(),
});

async function userForgottenPassword(req, res) {
  try {
    await schema.validateAsync(req.body);

    const { email } = req.body;

    const user = await usersRepository.userFindByEmail(email);

    if (user) {
      const { name, verification_code } = user;
      let newVerificationCode = await cryptoRandomString({ length: 64 });

      if (verification_code.startsWith('verified')) {
        newVerificationCode = `verified${newVerificationCode}`;
      }

      await usersRepository.userForgottenPassword([newVerificationCode, email]);

      if (!(await emailSender.emailSendForgottenPassword(name, email, newVerificationCode))) {
        errorsManage.throwError(500, 'We could not send the verification email so please try later');
      }
    }

    res.status(201).send({
      email,
      message:
        'If your email is in our database, we will send you an email with a link to log into your account, where you can change your password',
    });
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = userForgottenPassword;
