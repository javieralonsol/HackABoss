const solutionCreate = require('./solution-create.js');
const solutionGetAllFromId = require('./solution-get-all-from-id.js');
const solutionGetAllOfUser = require('./solution-get-all-of-user.js');
const solutionSetChosenSolution = require('./solution-set-chosen-solution.js');
const solutionToggleVisibilityById = require('./solution-toggle-visibility-by-id.js');

module.exports = {
  solutionCreate,
  solutionGetAllFromId,
  solutionGetAllOfUser,
  solutionSetChosenSolution,
  solutionToggleVisibilityById,
}