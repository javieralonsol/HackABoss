const serviceCreate = require('./service-create.js');
const serviceToggleVisibilityById = require('./service-toggle-visibility-by-id.js');
const serviceGetAll = require('./service-get-all.js');
const serviceGetAllByCategory = require('./service-get-all-by-category.js');
const serviceGetAllOfUser = require('./service-get-all-of-user.js');
const serviceGetById = require('./service-get-by-id.js');
const serviceUpdateById = require('./service-update-by-id.js');

module.exports = {
  serviceCreate,
  serviceToggleVisibilityById,
  serviceGetAll,
  serviceGetAllByCategory,
  serviceGetAllOfUser,
  serviceGetById,
  serviceUpdateById,
};
