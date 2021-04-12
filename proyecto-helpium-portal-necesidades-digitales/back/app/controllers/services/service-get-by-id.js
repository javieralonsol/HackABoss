'use strict';

const Joi = require('joi');

const servicesRepository = require('../../repositories/services-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const schema = Joi.object({
  id: Joi.number().positive().required(),
});

async function serviceGetById(req, res) {
  try {
    const { id } = req.params;

    await schema.validateAsync(req.params);

    const service = await servicesRepository.serviceFindById(id);

    if (!service) {
      const error = new Error('Not availiable');
      error.status = 400;
      throw error;
    }
    res.send(service);
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = serviceGetById;
