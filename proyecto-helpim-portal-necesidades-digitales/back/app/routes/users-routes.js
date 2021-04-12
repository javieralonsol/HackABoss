'use strict';

const express = require('express');

const {
  userActivate,
  userDeleteImageProfile,
  userForgottenPassword,
  userGetAll,
  userGetProfile,
  userGetProfileFromId,
  userLogin,
  userRegister,
  userToggleVisibilityById,
  userUpdate,
  userUploadImageProfile,
} = require('../controllers/users/index');

const validateAuth = require('../middlewares/auth-validate.js');

const router = express.Router();

// Public
router.route('/register').post((req, res) => userRegister(req, res));
router.route('/login').post((req, res) => userLogin(req, res));
router.route('/activation').get((req, res) => userActivate(req, res));
router.route('/forgotten').post((req, res) => userForgottenPassword(req, res));

// Private
router
  .route('/')
  .get((req, res) => userGetAll(req, res));

router
  .route('/profile')
  .all(validateAuth)
  .get((req, res) => userGetProfile(req, res));

router
  .route('/profile/:id')
  .get((req, res) => userGetProfileFromId(req, res));

router
  .route('/update')
  .all(validateAuth)
  .patch((req, res) => userUpdate(req, res));

router
  .route('/upload')
  .all(validateAuth)
  .post((req, res) => userUploadImageProfile(req, res))
  .delete((req, res) => userDeleteImageProfile(req, res));

router
  .route('/:id')
  .all(validateAuth)
  .delete((req, res) => userToggleVisibilityById(req, res));


module.exports = router;
