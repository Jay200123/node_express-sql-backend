const express = require('express');

const router = express.Router();

const { getItems, storeItem } = require('../controllers/itemController');

router.get('/items', getItems);
router.post('/items/store', storeItem);

module.exports = router;