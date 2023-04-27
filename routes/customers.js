const express = require('express');
const router = express.Router();

const { getCustomers, storeCustomer, getOneCustomer, deleteCustomer, updateCustomer } = require('../controllers/customerController');

router.get('/customers', getCustomers);
router.post('/customers/store', storeCustomer);
router.get('/customers/edit/:id', getOneCustomer);
router.put('/customers/update/:id', updateCustomer);
router.delete('/customers/delete/:id', deleteCustomer);

module.exports = router;