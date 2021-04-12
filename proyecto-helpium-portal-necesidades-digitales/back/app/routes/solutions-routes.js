'use strict';

const express = require('express');
const router = express.Router();

const {
  solutionCreate,
  solutionGetAllFromId,
  solutionGetAllOfUser,
  solutionSetChosenSolution,
  solutionToggleVisibilityById,
} = require('../controllers/solutions/index');

const validateAuth = require('../middlewares/auth-validate.js');

// Public
router.route('/:id').get((req, res) => solutionGetAllFromId(req, res));

// Private
router
  .route('/')
  .all(validateAuth)
  .get((req, res) => solutionGetAllOfUser(req, res))
  .post((req, res) => solutionCreate(req, res));

router
  .route('/:id')
  .all(validateAuth)
  .delete((req, res) => solutionToggleVisibilityById(req, res))
  .put((req, res) => solutionSetChosenSolution(req, res));

module.exports = router;
