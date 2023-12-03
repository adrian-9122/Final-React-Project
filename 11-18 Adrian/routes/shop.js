const express = require('express');
const router = express.Router();
const shopController = require("../controllers/shopController");
const ProductModel = require('../models/Products');

router.get( '/showCustomers', shopController.getCustomerSales);
router.get( '/showSales', shopController.showSales);
router.get( '/showProducts', shopController.showProducts);
router.get( '/home', shopController.showHome);
router.get( '/', shopController.showHome);
router.get('/postNewCustomer', shopController.getCustomerInfo)
router.get('/postNewProduct', shopController.getProductInfo)
router.post('/postNewCustomer', shopController.postCustomerInfo)
router.post('/postNewProduct', shopController.postProductInfo);
router.get( '/updateCustomer/:id', shopController.updateCustomer);
router.post( '/postUpdateCustomer', shopController.postUpdateCustomer);


module.exports = router;