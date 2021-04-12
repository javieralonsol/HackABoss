'use strict';

const Joi = require('joi');

const solutionsRepository = require('../../repositories/solutions-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const schema = Joi.object().keys({
  limit: Joi.number().greater(0),
  offset: Joi.number().greater(-1),
});

async function solutionGetAllOfUser(req, res) {
  try {
    await schema.validateAsync(req.query);

    res.send(await solutionsRepository.solutionGetAllOfUser(req.auth.id, req.query.limit, req.query.offset));
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = solutionGetAllOfUser;
