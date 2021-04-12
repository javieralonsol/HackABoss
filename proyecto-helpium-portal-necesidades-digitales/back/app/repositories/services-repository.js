'use strict';

const database = require('../infrastructure/database');

async function serviceCreate(fields) {
  const pool = await database.getPool();
  const [created] = await pool.query('INSERT INTO services SET ?', fields);
  return created.insertId;
}

async function serviceFindById(id) {
  const pool = await database.getPool();
  const [service] = await pool.query('SELECT * FROM services WHERE id = ?', id);
  return service[0];
}

async function serviceFindByTitle(title) {
  const pool = await database.getPool();
  const [service] = await pool.query('SELECT * FROM services WHERE title = ?', title);
  return service[0];
}

async function serviceGetAll(limit = 50, offset = 0) {
  const pool = await database.getPool();
  const [services] = await pool.query('SELECT * FROM services ORDER BY timestamp DESC LIMIT ? OFFSET ?', [parseInt(limit), parseInt(offset)]);
  return services;
}

async function serviceGetAllOfUser(id_user, limit = 50, offset = 0) {
  const pool = await database.getPool();
  const [services] = await pool.query('SELECT * FROM services WHERE id_user = ? ORDER BY timestamp DESC LIMIT ? OFFSET ?', [id_user, parseInt(limit), parseInt(offset)]);
  return services;
}

async function serviceGetAllByCategory(category, limit = 50, offset = 0) {
  const pool = await database.getPool();
  const [services] = await pool.query(
    'SELECT * FROM services WHERE category = ? ORDER BY timestamp DESC LIMIT ? OFFSET ?', [category, parseInt(limit), parseInt(offset)]);
  return services;
}

async function serviceToggleVisibilityById(fields) {
  const pool = await database.getPool();
  const [update] = await pool.query(`UPDATE services SET ? WHERE id = ?`, fields);
  return update.affectedRows;
}

async function serviceUpdateById(fields, id) {
  const pool = await database.getPool();
  const [update] = await pool.query(`UPDATE services SET ? WHERE id = ?`, [fields, id]);
  return update.affectedRows;
}

module.exports = {
  serviceCreate,
  serviceFindById,
  serviceFindByTitle,
  serviceGetAll,
  serviceGetAllByCategory,
  serviceGetAllOfUser,
  serviceToggleVisibilityById,
  serviceUpdateById,
};
