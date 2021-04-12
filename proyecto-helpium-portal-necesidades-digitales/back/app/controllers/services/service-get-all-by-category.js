'use strict';

const Joi = require('joi');

const servicesRepository = require('../../repositories/services-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const schema = Joi.object().keys({
  category: Joi.string().required(),
  limit: Joi.number().greater(0),
  offset: Joi.number().greater(-1),
});

async function serviceGetAllByCategory(req, res) {
  try {
    await schema.validateAsync({ ...req.query, ...req.params });

    const services = await servicesRepository.serviceGetAllByCategory(
      req.params.category,
      req.query.limit,
      req.query.offset
    );

    res.send(services);
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = serviceGetAllByCategory;
