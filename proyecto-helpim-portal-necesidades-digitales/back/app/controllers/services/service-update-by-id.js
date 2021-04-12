'use strict';

const Joi = require('joi');

const servicesRepository = require('../../repositories/services-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const schema = Joi.object().keys({
  id: Joi.number().positive().required(),
  title: Joi.string().min(20).max(100),
  category: Joi.string().max(150),
  explication: Joi.string().min(50).max(5000),
  email_notification: Joi.number().min(0).max(1),
});

async function serviceUpdateById(req, res) {
  try {
    Object.keys(req.body).map(
      (key) => (req.body[key] = typeof req.body[key] === 'string' ? req.body[key].trim() : req.body[key])
    );

    await schema.validateAsync({ ...req.body, ...req.params });

    const service = await servicesRepository.serviceFindById(req.params.id);

    if (req.body.title && req.body.title === service.title) {
      if (await servicesRepository.serviceFindByTitle(req.body.title)) {
        errorsManage.throwError(400, 'Title exists');
      }
    }

    const updatedService = {
      ...service,
      ...req.body,
    };

    await servicesRepository.serviceUpdateById(updatedService, service.id);

    res.send(updatedService);
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = serviceUpdateById;
