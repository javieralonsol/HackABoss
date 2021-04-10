'use strict';

const Joi = require('joi');

const servicesRepository = require('../../repositories/services-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const schema = Joi.object({
  id: Joi.number().positive().required(),
});

async function serviceToggleVisibilityById(req, res) {
  try {
    if (req.auth.role !== 'admin') {
      errorsManage.throwError(403, 'You do not have permission to perform this');
    }

    await schema.validateAsync(req.params);

    const service = await servicesRepository.serviceFindById(req.params.id);

    if (!service) {
      errorsManage.throwError(400, 'Service does not exists');
    }

    await servicesRepository.serviceToggleVisibilityById([{ hidden: !service.hidden }, req.params.id]);

    res.send({ ...service, hidden: service.hidden ? 1 : 0 });
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = serviceToggleVisibilityById;
