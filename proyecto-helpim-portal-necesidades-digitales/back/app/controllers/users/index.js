const userActivate = require('./user-activate.js');
const userDeleteImageProfile = require('./user-delete-image-profile.js');
const userForgottenPassword = require('./user-forgotten-password.js');
const userGetAll = require('./user-get-all.js');
const userGetProfile = require('./user-get-profile.js');
const userGetProfileFromId = require('./user-get-profile-from-id.js');
const userLogin = require('./user-login.js');
const userRegister = require('./user-register.js');
const userToggleVisibilityById = require('./user-toggle-visibility-by-id.js');
const userUpdate = require('./user-update.js');
const userUploadImageProfile = require('./user-upload-image-profile.js');


module.exports = {
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
};
