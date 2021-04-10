'use strict';

const express = require('express');
const validateAuth = require('../middlewares/auth-validate.js');

const {
  serviceCreate,
  serviceToggleVisibilityById,
  serviceGetAll,
  serviceGetAllByCategory,
  serviceGetAllOfUser,
  serviceGetById,
  serviceUpdateById,
} = require('../controllers/services/index');

const router = express.Router();

router
  .route('/')
  .get((req, res) => serviceGetAll(req, res))
  .all(validateAuth)
  .post((req, res) => serviceCreate(req, res));

router.route('/category/:category').get((req, res) => serviceGetAllByCategory(req, res));

router.route('/user').all(validateAuth).get((req, res) => serviceGetAllOfUser(req, res));
router
  .route('/:id')
  .get((req, res) => serviceGetById(req, res))
  .all(validateAuth)
  .patch((req, res) => serviceUpdateById(req, res))
  .delete((req, res) => serviceToggleVisibilityById(req, res));

module.exports = router;
