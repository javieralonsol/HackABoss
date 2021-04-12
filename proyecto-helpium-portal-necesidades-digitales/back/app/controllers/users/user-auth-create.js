'use strict';

const jwt = require('jsonwebtoken');

const errorsManage = require('../../errors/errors-manage.js');

const jwtTokenExpiration = '30d';

async function authCreate({ id, email, role, name, surname }, res) {
  try {
    const token = jwt.sign(
      {
        id,
        email,
        role,
        name,
        surname,
      },
      process.env.JWT_SECRET,
      { expiresIn: jwtTokenExpiration }
    );

    res.send({
      accessToken: token,
      expiresIn: jwtTokenExpiration,
    });
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = authCreate;
