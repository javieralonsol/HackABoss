'use strict';

const database = require('../infrastructure/database.js');

async function solutionCreate(fields) {
  const pool = await database.getPool();
  const [created] = await pool.query('INSERT INTO solutions SET ?', fields);
  return created.insertId;
}

async function solutionGetAllFromId(id, limit = 50, offset = 0) {
  const pool = await database.getPool();
  const [solutions] = await pool.query(
    `SELECT * FROM solutions WHERE id_service = ? ORDER BY choosen_solution DESC, timestamp DESC LIMIT ${limit} OFFSET ${offset}`,
    id
  );
  return solutions;
}

async function solutionGetAllOfUser(id, limit = 50, offset = 0) {
  const pool = await database.getPool();
  const [solutions] = await pool.query(`SELECT * FROM solutions WHERE id_user = ? LIMIT ${limit} OFFSET ${offset}`, id);
  return solutions;
}

async function solutionGetById(id) {
  const pool = await database.getPool();
  const [solution] = await pool.query('SELECT * FROM solutions WHERE id = ?', id);
  return solution[0];
}

async function solutionSetChosenSolution(serviceId, solutionId) {
  const pool = await database.getPool();
  await pool.query(`UPDATE solutions SET choosen_solution = 0 WHERE id_service = ?`, serviceId);

  const [update] = await pool.query(`UPDATE solutions SET choosen_solution = 1 WHERE id = ?`, solutionId);
  return update.affectedRows;
}

async function solutionToggleVisibilityById(fields) {
  const pool = await database.getPool();
  const [update] = await pool.query(`UPDATE solutions SET ? WHERE id = ?`, fields);
  return update.affectedRows;
}

module.exports = {
  solutionCreate,
  solutionGetAllFromId,
  solutionGetAllOfUser,
  solutionGetById,
  solutionSetChosenSolution,
  solutionToggleVisibilityById,
};
