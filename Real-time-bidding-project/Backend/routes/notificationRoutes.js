const express = require('express');
const { getAllNotifications, markAllNotificationsAsRead } = require('../controllers/notificationControllers.js');
const { authenticate } = require('../middlewares/auth.js');

const router = express.Router();

router.get('/', authenticate, getAllNotifications);
router.post('/mark-read', authenticate, markAllNotificationsAsRead);

module.exports = router;
