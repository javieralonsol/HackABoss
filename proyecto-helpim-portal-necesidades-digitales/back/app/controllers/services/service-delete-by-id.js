'use strict';

const Joi = require('joi');
const { findAll, removeById } = require('../../repositories/services-repository');
const createJsonError = require('../../errors/errors-manage.js');

const schema = Joi.number().positive().required();

async function deleteServiceById(req, res) {
  try {
    if (req.auth.role !== 'admin') {
      const error = new Error('Can not realize this action');
      error.status = 403;
      throw error;
    }
    const { id } = req.params;
    await schema.validateAsync(id);
    await removeById(parseInt(id));
    const services = await findAll();

    res.status(200).send(services);
  } catch (err) {
    createJsonError(err, res);
  }
}

module.exports = deleteServiceById;
