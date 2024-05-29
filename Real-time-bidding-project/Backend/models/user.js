const pool = require('../config/db');

const createUser = async (username, password, email, role) => {
  const [result] = await pool.execute(
    'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)',
    [username, password, email, role]
  );
  return result;
};

const findUserByEmail = async (email) => {
  const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const findUserById = async (id) => {
  const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

module.exports = { createUser, findUserByEmail, findUserById };
