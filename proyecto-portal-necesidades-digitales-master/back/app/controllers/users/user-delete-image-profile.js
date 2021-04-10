"use strict";

const fs = require('fs').promises;

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');
const createAvatarInitials = require('../../helpers/createAvatarInitials.js');

async function userDeleteImageProfile(req, res) {
  const { services, solutions, ...user } = await usersRepository.userFindById(req.auth.id);

  try {
    fs.unlink(`${__dirname}/../../../public_html/media/profiles/${req.auth.id}.webp`);

    const initials = user.name[0].toLowerCase() + user.surname[0].toLowerCase();

    createAvatarInitials(initials);

    user.image = `${initials}.svg`;

    const updatedUser = {
      ...user,
      image: `${initials}.svg`,
    }

    await usersRepository.userUpdate(updatedUser, req.auth.id);

    res.send({
      url: `${process.env.SERVER_DOMAIN}/media/profiles/${initials}.svg`,
    });
} catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = userDeleteImageProfile;

// `${process.env.SERVER_DOMAIN}/media/profiles/${req.auth.id}.webp`
//  await fs.writeFile(, avatar);

// borrar img
// poner inicales en img
// crear avatar initials