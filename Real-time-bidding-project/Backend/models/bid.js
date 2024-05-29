const pool = require('../config/db');

const createBid = async (itemId, userId, bidAmount) => {
  const [result] = await pool.execute(
    'INSERT INTO bids (item_id, user_id, bid_amount) VALUES (?, ?, ?)',
    [itemId, userId, bidAmount]
  );
  return result;
};

const findBidsByItemId = async (itemId) => {
  const [rows] = await pool.execute('SELECT * FROM bids WHERE item_id = ?', [itemId]);
  return rows;
};

module.exports = { createBid, findBidsByItemId };
