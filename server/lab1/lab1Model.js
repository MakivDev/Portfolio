// server/lab1/lab1Model.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Вказуємо шлях до бази даних
const dbPath = path.join(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath);

// Функція для отримання всіх продавців
const getSellers = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM SELLERS', [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// Функція для отримання всіх замовників
const getCustomers = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM CUSTOMERS', [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// Функція для отримання всіх товарів
const getProducts = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM PRODUCTS', [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// Функція для створення замовлення
const createOrder = (customer_id, seller_id, products) => {
  return new Promise((resolve, reject) => {
    const order_date = new Date().toISOString();
    // Створення замовлення
    db.run('INSERT INTO ORDERS (customer_id, seller_id, order_date) VALUES (?, ?, ?)', [customer_id, seller_id, order_date], function (err) {
      if (err) {
        reject(err);
      } else {
        const order_id = this.lastID;

        // Додавання товарів до замовлення
        products.forEach(product => {
          db.run('INSERT INTO ORDERED (order_id, product_id, quantity) VALUES (?, ?, ?)', [order_id, product.product_id, product.quantity]);
        });

        resolve({ order_id, order_date });
      }
    });
  });
};

// Закриття бази даних після роботи
const closeDB = () => {
  db.close();
};

module.exports = { getSellers, getCustomers, getProducts, createOrder, closeDB };
