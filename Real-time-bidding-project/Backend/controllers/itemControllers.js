const { createItem, findAllItems, findItemById, updateItemById, deleteItemById } = require('../models/item');

const getAllItems = async (req, res) => {
  try {
    const items = await findAllItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving items' });
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await findItemById(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving item' });
  }
};

const createNewItem = async (req, res) => {
  const { name, description, starting_price, end_time, image_url } = req.body;

  try {
    await createItem(name, description, starting_price, end_time, image_url);
    res.status(201).json({ message: 'Item created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating item' });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, starting_price, end_time, image_url } = req.body;

  try {
    await updateItemById(id, name, description, starting_price, end_time, image_url);
    res.json({ message: 'Item updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating item' });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteItemById(id);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
};

module.exports = { getAllItems, getItemById, createNewItem, updateItem, deleteItem };
