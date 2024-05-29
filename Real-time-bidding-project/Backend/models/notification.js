const pool = require('../config/db');

const createNotification = async (userId, message) => {
  const [result] = await pool.execute(
    'INSERT INTO notifications (user_id, message) VALUES (?, ?)',
    [userId, message]
  );
  return result;
};

const findNotificationsByUserId = async (userId) => {
  const [rows] = await pool.execute('SELECT * FROM notifications WHERE user_id = ?', [userId]);
  return rows;
};

const markNotificationsAsRead = async (userId) => {
  const [result] = await pool.execute(
    'UPDATE notifications SET is_read = true WHERE user_id = ?',
    [userId]
  );
  return result;
};

module.exports = { createNotification, findNotificationsByUserId, markNotificationsAsRead };
