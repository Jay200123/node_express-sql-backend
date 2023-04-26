const express = require('express');
const router = express.Router();

const { getCustomers, storeCustomer, getOneCustomer, deleteCustomer } = require('../controllers/customerController');

router.get('/customers', getCustomers);
router.post('/customers/store', storeCustomer);
router.get('/customers/:id', getOneCustomer);
router.delete('/customers/:id', deleteCustomer);

module.exports = router;