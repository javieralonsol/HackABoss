'use strict';

const Joi = require('joi');

const solutionsRepository = require('../../repositories/solutions-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const schema = Joi.object({
  id: Joi.number().positive().required(),
});

async function solutionToggleVisibilityById(req, res) {
  try {
    if (req.auth.role !== 'admin') {
      errorsManage.throwError(403, 'You do not have permission to perform this');
    }

    await schema.validateAsync(req.params);

    const solution = await solutionsRepository.solutionGetById(req.params.id);

    if (!solution) {
      errorsManage.throwError(400, 'Solution does not exists');
    }

    await solutionsRepository.solutionToggleVisibilityById([{ hidden: !solution.hidden }, req.params.id]);

    res.send({ ...solution, hidden: solution.hidden ? 1 : 0 });
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = solutionToggleVisibilityById;
