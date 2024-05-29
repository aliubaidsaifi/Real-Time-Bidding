const express = require('express');
const { body } = require('express-validator');
const { register, login } = require('../controllers/authControllers');

const router = express.Router();

router.post('/register', [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], register);

router.post('/login', login);

module.exports = router;
