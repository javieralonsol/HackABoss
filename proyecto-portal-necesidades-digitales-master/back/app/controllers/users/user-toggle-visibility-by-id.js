'use strict';

const Joi = require('joi');

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const schema = Joi.object({
  id: Joi.number().positive().required(),
});

async function userToggleVisibilityById(req, res) {
  try {
    if (req.auth.role !== 'admin') {
      errorsManage.throwError(403, 'You do not have permission to perform this');
    }

    await schema.validateAsync(req.params);

    const { id } = req.params;

    const user = await usersRepository.userFindById(id);

    if (!user) {
      errorsManage.throwError(400, 'User does not exists');
    }

    await usersRepository.userToggleVisibilityById([{ hidden: !user.hidden }, id]);

    res.send({ ...user, hidden: user.hidden ? true : false });
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = userToggleVisibilityById;
