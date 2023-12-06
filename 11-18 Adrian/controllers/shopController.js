const express = require('express');
const app = express();
const router = express.Router();

const Sales = require('../models/Sales');
const Product = require('../models/Products');
const Customer = require('../models/Customer');


exports.showHome = async (req, res) => {
    let allCustomerInfo = await Customer.fetchCustomerSales();
    let allProductInfo = await Product.fetchProductDetails();
    let allSalesInfo = await Sales.getMonthly();
    res.render('home', {
        customers: allCustomerInfo[0].slice(0,5),
        products: allProductInfo[0].slice(0,5),
        sales: allSalesInfo[0].slice(0,5)
    });
}
exports.getCustomerSales = (req, res)=>{
    Customer.fetchCustomerSales()
        .then((rows, fData) =>
        {
            res.json(rows[0])
        })
}
exports.showSales = (req, res)=>{
    Sales.fetchSalesDetails()
        .then((rows, fData) =>
        {
            res.json(rows[0])
        })
}

exports.showProducts = ( req, res, next ) => {
        Product.fetchProductDetails()
            .then((rows, fData) =>
            {
                res.json(rows[0])
            })
}
exports.getCustomerInfo = ( req, res, next ) => {
    // res.render('postNewCustomer', {})
    res.json({})
}
exports.getProductInfo = ( req, res, next ) => {
    // res.render('postNewProduct', {})
    res.json( {})
}
exports.postCustomerInfo = ( req, res, next ) => {
    let name = req.body.name;
    let email = req.body.email;
    const customer = new Customer( name, email );
    customer.save()
}

exports.postProductInfo = ( req, res, next ) => {
    let name = req.body.name;
    let price = req.body.price;
    const product = new Product( name, price );
    product.save()
        .then(res.redirect('/showProducts'))
    // add react here
}
//changes
exports.updateCustomer = (req, res, next) => {
    let id = req.params.id;
    Customer.findById(id)
        .then ((rows, fieldData) =>{
            let c = rows[0][0];
            res.render( 'updateForm', {
                name : c.CustomerName,
                id : c.CustomerID,
                from: 'updateCustomer',
                email: c.CustomerEmail
            })
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}
exports.postUpdateCustomer = ( req, res, next ) => {
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.name;
    const customer = new Customer(name, email);
    customer.update( id )
        .then (( rows, fieldData ) =>{
            res.redirect("/showCustomers");
        }).catch ( err => {
        console.log( "update error-> "); console.log( err );
    })
    return;
}