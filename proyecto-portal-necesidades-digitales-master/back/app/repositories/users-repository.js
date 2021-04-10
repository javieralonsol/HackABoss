'use strict';

const database = require('../infrastructure/database.js');

async function userActivate(fields) {
  const pool = await database.getPool();
  const [update] = await pool.query(
    `UPDATE users SET verification_code = "verified"
    WHERE email = ? AND verification_code = ?`,
    fields
  );
  return update.affectedRows;
}

async function userDeleteById(id) {
  const pool = await database.getPool();
  await pool.query('DELETE FROM users WHERE id = ?', id);
  return true;
}

async function userFindByEmail(email) {
  const pool = await database.getPool();
  const [users] = await pool.query('SELECT * FROM users WHERE email = ?', email);
  return users[0];
}

async function userFindById(id) {
  const pool = await database.getPool();
  const [users] = await pool.query(
    `SELECT users.*,
    (SELECT COUNT(id) FROM services WHERE id_user=users.id) AS services,
    (SELECT COUNT(id) FROM solutions WHERE id_user=users.id) AS solutions
    FROM users
    WHERE users.id = ?`,
    id
  );
  return users[0];
}

async function userForgottenPassword(fields) {
  const pool = await database.getPool();
  const [update] = await pool.query(`UPDATE users SET verification_code = ? WHERE email = ?`, fields);
  return update.affectedRows;
}

async function userGetAll(limit = 50, offset = 0) {
  const pool = await database.getPool();
  const [users] = await pool.query(
    `SELECT users.*,
    (SELECT COUNT(id) FROM services WHERE id_user=users.id) AS services,
    (SELECT COUNT(id) FROM solutions WHERE id_user=users.id) AS solutions
    FROM users
    GROUP BY users.id
    LIMIT ${limit} OFFSET ${offset}`
  );
  return users;
}

async function userRegister(fields) {
  const pool = await database.getPool();
  const [created] = await pool.query('INSERT INTO users SET ?', fields);
  return created.insertId;
}

async function userToggleVisibilityById(fields) {
  const pool = await database.getPool();
  const [update] = await pool.query(`UPDATE users SET ? WHERE id = ?`, fields);
  return update.affectedRows;
}

async function userUpdate(fields, id) {
  const pool = await database.getPool();
  const [update] = await pool.query(`UPDATE users SET ? WHERE id = ?`, [fields, id]);
  return update.affectedRows;
}

module.exports = {
  userActivate,
  userDeleteById,
  userFindByEmail,
  userFindById,
  userForgottenPassword,
  userGetAll,
  userRegister,
  userToggleVisibilityById,
  userUpdate,
};
