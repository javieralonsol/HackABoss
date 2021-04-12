'use strict';

const Joi = require('joi');

const servicesRepository = require('../../repositories/services-repository');
const createJsonError = require('../../errors/errors-manage.js');

const schema = Joi.object().keys({
  limit: Joi.number().greater(0),
  offset: Joi.number().greater(-1),
});

async function serviceGetAllOfUser(req, res) {
  try {
    await schema.validateAsync(req.query);

    res.send(await servicesRepository.serviceGetAllOfUser(req.auth.id, req.query.limit, req.query.offset));

  } catch (err) {
    createJsonError.createJsonError(err, res);
  }
}

module.exports = serviceGetAllOfUser;
