'use strict';

const Joi = require('joi');
const path = require('path');
const cryptoRandomString = require('crypto-random-string');

const servicesRepository = require('../../repositories/services-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const validExtensions = ['.gif', '.jpeg', '.jpg', '.png', '.webp', '.pdf', '.txt', '.zip'];

const schema = Joi.object().keys({
  title: Joi.string().min(20).max(100).required(),
  category: Joi.string().max(150).required(),
  explication: Joi.string().min(50).max(5000).required(),
  email_notification: Joi.number().min(0).max(1),
});

async function serviceCreate(req, res) {
  try {
    Object.keys(req.body).map(
      (key) => (req.body[key] = typeof req.body[key] === 'string' ? req.body[key].trim() : req.body[key])
    );

    await schema.validateAsync(req.body);

    if (await servicesRepository.serviceFindByTitle(req.body.title)) {
      errorsManage.throwError(400, 'Title exists');
    }

    if (!req.files || !Object.keys(req.files).length || !req.files.file) {
      errorsManage.throwError(400, '"file" is required');
    }

    const uploadedFile = req.files.file;
    const extension = path.extname(uploadedFile.name);
    if (!validExtensions.includes(extension)) {
      errorsManage.throwError(400, `Allowed filetypes are ${validExtensions.join(', ')}`);
    }

    if (uploadedFile.size > 20000000) {
      errorsManage.throwError(400, 'The file size must not exceed 20 megabytes');
    }

    if (uploadedFile.name.length > 150) {
      errorsManage.throwError(400, 'The file name must not be longer than 150 characters');
    }

    const randomString = await cryptoRandomString({ length: 8 });

    const createdFileName = `${randomString}_${uploadedFile.name}`;
    const createdFilePath = `${process.env.SERVER_DOMAIN}/files/${req.auth.id}/${randomString}_${uploadedFile.name}`;

    const insertedObject = { ...req.body, file_name: createdFilePath, id_user: req.auth.id };

    const insertedId = await servicesRepository.serviceCreate(insertedObject);

    const pathToSaveFile = `${__dirname}/../../../public_html/files/${req.auth.id}/${createdFileName}`;
    try {
      await uploadedFile.mv(pathToSaveFile);
    } catch (err) {
      errorsManage.throwError(500, `Error saving file: ${err}`);
    }

    res.status(201).send({ id: insertedId, ...insertedObject });
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = serviceCreate;
