'use strict';

const Joi = require('joi');

const servicesRepository = require('../../repositories/services-repository');
const createJsonError = require('../../errors/errors-manage.js');

const schema = Joi.object().keys({
  limit: Joi.number().greater(0),
  offset: Joi.number().greater(-1),
});

async function serviceGetAll(req, res) {
  try {
    await schema.validateAsync(req.query);

    res.send(await servicesRepository.serviceGetAll(req.query.limit, req.query.offset));
  } catch (err) {
    createJsonError.createJsonError(err, res);
  }
}

module.exports = serviceGetAll;
