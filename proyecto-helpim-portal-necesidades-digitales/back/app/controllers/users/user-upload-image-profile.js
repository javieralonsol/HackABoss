'use strict';

const path = require('path');
const fs = require('fs').promises;
const sharp = require('sharp');

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

const validExtensions = ['.gif', '.jpeg', '.jpg', '.png', '.webp'];

async function userUploadImageProfile(req, res) {
  try {
    if (!req.files || !Object.keys(req.files).length) {
      errorsManage.throwError(400, 'No files were uploaded');
    }

    const profileImage = req.files.profileImage;
    if (!profileImage) {
      errorsManage.throwError(400, '"profileImage" file is required');
    }

    const extension = path.extname(profileImage.name);
    if (!validExtensions.includes(extension)) {
      errorsManage.throwError(400, `Allowed filetypes are ${validExtensions.join(', ')}`);
    }

    if (profileImage.size > process.env.PROFILE_IMG_MAX_SIZE) {
      errorsManage.throwError(400, `"Filesize" max size is ${process.env.PROFILE_IMG_MAX_SIZE / 1000000}M`);
    }

    const pathTmpImage = `${__dirname}/../../../public_html/media/profiles/${req.auth.id}.tmp`;

    try {
      await profileImage.mv(pathTmpImage);

      const photoBuffer = await fs.readFile(pathTmpImage);
      await sharp(photoBuffer)
        .resize(300, 300)
        .toFormat('webp')
        .toFile(pathTmpImage.replace(/\.tmp$/, '.webp'));

      fs.unlink(pathTmpImage);

      await usersRepository.userUpdate({ image: `${req.auth.id}.webp` }, req.auth.id);

      res.send({
        url: `${process.env.SERVER_DOMAIN}/media/profiles/${req.auth.id}.webp`,
      });
    } catch (err) {
      errorsManage.throwError(500, `Error saving file: ${err}`);
    }
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = userUploadImageProfile;
