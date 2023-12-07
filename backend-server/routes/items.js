const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Create item
router.post('/', async (req, res) => {
  const { itemName, itemDescription, itemPrice, owner } = req.body;

  const newItem = new Item({
    itemName,
    itemDescription,
    itemPrice,
    owner,
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get items by owner ID
router.get('/owner/:ownerId', async (req, res) => {
  try {
    const items = await Item.find({ owner: req.params.ownerId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete item by ID
router.delete('/:id', getItem, async (req, res) => {
  try {
    await res.locals.item.deleteOne();
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware for getting item by ID
async function getItem(req, res, next) {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Cannot find item' });
    }
    res.locals.item = item;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = router;
