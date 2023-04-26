const express = require('express');
const router = express.Router();

const { getCustomers, storeCustomer } = require('../controllers/customerController');

router.get('/customers', getCustomers);
router.post('/customers/store', storeCustomer);

module.exports = router;