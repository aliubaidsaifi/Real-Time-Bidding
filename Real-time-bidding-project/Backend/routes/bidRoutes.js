const express = require('express');
const { getAllBidsForItem, placeBid } = require('../controllers/bidControllers.js');
const { authenticate } = require('../middlewares/auth.js');

const router = express.Router();

router.get('/:itemId/bids', getAllBidsForItem);
router.post('/:itemId/bids', authenticate, placeBid);

module.exports = router;
