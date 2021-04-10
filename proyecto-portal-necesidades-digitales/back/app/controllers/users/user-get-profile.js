'use strict';

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

async function userGetProfile(req, res) {
  try {
    const { password, ...userInfo } = await usersRepository.userFindById(req.auth.id);

    userInfo.image = `${process.env.SERVER_DOMAIN}/media/profiles/${userInfo.image}`;

    res.send(userInfo);
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = userGetProfile;
