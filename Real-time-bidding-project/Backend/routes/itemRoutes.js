const express = require('express');
const { getAllItems, getItemById, createNewItem, updateItem, deleteItem } = require('../controllers/itemControllers.js');
const { authenticate, authorize } = require('../middlewares/auth.js');

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', getItemById);
router.post('/', authenticate, createNewItem);
router.put('/:id', authenticate, authorize(['admin', 'user']), updateItem);
router.delete('/:id', authenticate, authorize(['admin', 'user']), deleteItem);

module.exports = router;
