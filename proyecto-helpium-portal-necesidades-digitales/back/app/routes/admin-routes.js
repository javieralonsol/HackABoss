'use strict';

const express = require('express');

const adminCreateRandomUsers = require('../controllers/admin/admin-create-random-users.js');
const validateAuth = require('../middlewares/auth-validate.js');

const router = express.Router();

router
  .route('/random/:number')
  .all(validateAuth)
  .get((req, res) => adminCreateRandomUsers(req, res));

router
  .route('/todoexpertos/:category')
  .all(validateAuth)
  .get((req, res) => adminCreateRandomUsers(req, res));

module.exports = router;
