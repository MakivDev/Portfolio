// server/lab1/lab1Routes.js
const express = require('express');
const router = express.Router();
const { getSellers, getCustomers, getProducts, createOrder } = require('./lab1Model');

// API для отримання всіх продавців
router.get('/sellers', async (req, res) => {
  try {
    const sellers = await getSellers();
    res.json(sellers);
  } catch (err) {
    res.status(500).send('Error retrieving sellers');
  }
});

// API для отримання всіх замовників
router.get('/customers', async (req, res) => {
  try {
    const customers = await getCustomers();
    res.json(customers);
  } catch (err) {
    res.status(500).send('Error retrieving customers');
  }
});

// API для отримання всіх товарів
router.get('/products', async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err) {
    res.status(500).send('Error retrieving products');
  }
});

// API для створення замовлення
router.post('/order', async (req, res) => {
  const { customer_id, seller_id, products } = req.body;
  try {
    const result = await createOrder(customer_id, seller_id, products);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send('Error creating order');
  }
});

module.exports = router;
