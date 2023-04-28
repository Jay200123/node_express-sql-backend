const express = require('express');

const router = express.Router();

const { getItems, storeItem, getOneItem } = require('../controllers/itemController');

router.get('/items', getItems);
router.post('/items/store', storeItem);
router.get('/items/edit/:id', getOneItem);

module.exports = router;