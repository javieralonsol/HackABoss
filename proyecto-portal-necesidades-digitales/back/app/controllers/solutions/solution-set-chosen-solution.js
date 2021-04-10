'use strict';

const Joi = require('joi');

const solutionsRepository = require('../../repositories/solutions-repository.js');
const servicesRepository = require('../../repositories/services-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const schema = Joi.object().keys({
  id: Joi.number().positive().required(),
  id_solution: Joi.number().positive().required(),
});

async function solutionSetChosenSolution(req, res) {
  try {
    await schema.validateAsync({ ...req.body, ...req.params });

    const serviceId = req.params.id;
    const { id_user: serviceIdUser } = await servicesRepository.serviceFindById(serviceId);
    if (serviceIdUser !== req.auth.id) {
      errorsManage.throwError(400, `You have not created service ${serviceId} associated with solution ${solutionId}`);
    }

    const choosenSolutionId = parseInt(req.body.id_solution);
    const solution = await solutionsRepository.solutionGetById(choosenSolutionId);
    if (!solution) {
      errorsManage.throwError(400, 'Solution not found');
    }

    if (await solutionsRepository.solutionSetChosenSolution(serviceId, choosenSolutionId)) {
      res.send({ ...solution, choosen_solution: 1 });
    } else {
      errorsManage.throwError(400, 'Error processing the query');
    }
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = solutionSetChosenSolution;
