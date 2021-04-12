'use strict';

const Joi = require('joi');
const path = require('path');
const cryptoRandomString = require('crypto-random-string');

const solutionsRepository = require('../../repositories/solutions-repository.js');
const servicesRepository = require('../../repositories/services-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const validExtensions = ['.gif', '.jpeg', '.jpg', '.png', '.webp', '.pdf', '.txt', '.zip'];

const schema = Joi.object().keys({
  comment: Joi.string().min(50).max(5000).required(),
  id_service: Joi.number().positive().required(),
});

async function solutionCreate(req, res) {
  try {
    Object.keys(req.body).map(
      (key) => (req.body[key] = typeof req.body[key] === 'string' ? req.body[key].trim() : req.body[key])
    );

    await schema.validateAsync(req.body);

    const { id_service, comment } = req.body;

    if (!await servicesRepository.serviceFindById(id_service)) {
      errorsManage.throwError(400, 'Service not found')
    }

    let solutionFileName = '';
    let solutionFilePath = '';
    if (req.files && Object.keys(req.files).length) {
      const uploadedFile = req.files.file;
      if (uploadedFile) {
        const extension = path.extname(uploadedFile.name);
        if (!validExtensions.includes(extension)) {
          errorsManage.throwError(400, `Allowed filetypes are ${validExtensions.join(', ')}.`);
        }

        if (uploadedFile.size > 20000000) {
          errorsManage.throwError(400, 'The file size must not exceed 20 megabytes');
        }

        if (uploadedFile.name.length > 150) {
          errorsManage.throwError(400, 'The file name must not be longer than 150 characters');
        }

        const randomString = await cryptoRandomString({ length: 8 });

        solutionFileName = `${randomString}_${uploadedFile.name}`;

        solutionFilePath = `${process.env.SERVER_DOMAIN}/files/${req.auth.id}/${solutionFileName}`;

        const pathToSaveFile = `${__dirname}/../../../public_html/files/${req.auth.id}/${solutionFileName}`;
        try {
          await uploadedFile.mv(pathToSaveFile);
        } catch (err) {
          errorsManage.throwError(500, `Error saving file: ${err}`);
        }
      }
    }

    const insertedId = await solutionsRepository.solutionCreate({
      comment: comment,
      file_name: solutionFilePath,
      id_user: req.auth.id,
      id_service: id_service,
    });

    res.send(await solutionsRepository.solutionGetById(insertedId));
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = solutionCreate;
