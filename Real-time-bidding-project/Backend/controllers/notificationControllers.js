const { findNotificationsByUserId, markNotificationsAsRead } = require('../models/notification');

const getAllNotifications = async (req, res) => {
  const { userId } = req.user;

  try {
    const notifications = await findNotificationsByUserId(userId);
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving notifications' });
  }
};

const markAllNotificationsAsRead = async (req, res) => {
  const { userId } = req.user;

  try {
    await markNotificationsAsRead(userId);
    res.json({ message: 'Notifications marked as read' });
  } catch (error) {
    res.status(500).json({ message: 'Error marking notifications as read' });
  }
};

module.exports = { getAllNotifications, markAllNotificationsAsRead };
