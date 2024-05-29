const { createBid, findBidsByItemId } = require('../models/bid');
const { findItemById } = require('../models/item');
const { createNotification } = require('../models/notification');

const getAllBidsForItem = async (req, res) => {
  const { itemId } = req.params;

  try {
    const bids = await findBidsByItemId(itemId);
    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving bids' });
  }
};

const placeBid = async (req, res) => {
  const { itemId } = req.params;
  const { userId, bidAmount } = req.body;

  try {
    const item = await findItemById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    if (bidAmount <= item.current_price) {
      return res.status(400).json({ message: 'Bid amount must be higher than the current price' });
    }

    await createBid(itemId, userId, bidAmount);
    item.current_price = bidAmount;
    await item.save(); // Assuming item has a save method

    // Notify item owner
    await createNotification(item.user_id, `Your item has received a new bid of ${bidAmount}`);

    res.status(201).json({ message: 'Bid placed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error placing bid' });
  }
};

module.exports = { getAllBidsForItem, placeBid };
