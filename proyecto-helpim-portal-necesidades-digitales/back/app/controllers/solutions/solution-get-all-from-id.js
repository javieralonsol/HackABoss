'use strict';

const Joi = require('joi');

const solutionsRepository = require('../../repositories/solutions-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const schema = Joi.object().keys({
  id: Joi.number().positive().required(),
  limit: Joi.number().greater(0),
  offset: Joi.number().greater(-1),
});

async function solutionGetAllFromId(req, res) {
  try {
    await schema.validateAsync({ ...req.query, ...req.params });

    res.send(await solutionsRepository.solutionGetAllFromId(req.params.id, req.query.limit, req.query.offset));
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = solutionGetAllFromId;
