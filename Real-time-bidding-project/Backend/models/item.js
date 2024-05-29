const pool = require('../config/db');

const createItem = async (name, description, startingPrice, endTime, imageUrl) => {
  const [result] = await pool.execute(
    'INSERT INTO items (name, description, starting_price, current_price, end_time, image_url) VALUES (?, ?, ?, ?, ?, ?)',
    [name, description, startingPrice, startingPrice, endTime, imageUrl]
  );
  return result;
};

const findAllItems = async () => {
  const [rows] = await pool.execute('SELECT * FROM items');
  return rows;
};

const findItemById = async (id) => {
  const [rows] = await pool.execute('SELECT * FROM items WHERE id = ?', [id]);
  return rows[0];
};

const updateItemById = async (id, name, description, startingPrice, endTime, imageUrl) => {
  const [result] = await pool.execute(
    'UPDATE items SET name = ?, description = ?, starting_price = ?, end_time = ?, image_url = ? WHERE id = ?',
    [name, description, startingPrice, endTime, imageUrl, id]
  );
  return result;
};

const deleteItemById = async (id) => {
  const [result] = await pool.execute('DELETE FROM items WHERE id = ?', [id]);
  return result;
};

module.exports = { createItem, findAllItems, findItemById, updateItemById, deleteItemById };
