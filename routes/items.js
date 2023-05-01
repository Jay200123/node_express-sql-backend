const express = require('express');

const router = express.Router();

const { getItems, storeItem, getOneItem, updateItem, deleteItem, ItemStocks } = require('../controllers/itemController');

router.get('/items', getItems);
router.post('/items/store', storeItem);
router.get('/items/edit/:id', getOneItem);
router.put('/items/update/:id', updateItem);
router.delete('/items/delete/:id', deleteItem);

router.get('/item/stocks', ItemStocks);
module.exports = router;