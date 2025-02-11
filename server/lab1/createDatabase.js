// server/lab1/createDatabase.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Вказуємо шлях до бази даних
const dbPath = path.join(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath);

// Створення таблиць
db.serialize(() => {
  // Таблиця ПРОДАВЦІ
  db.run('CREATE TABLE IF NOT EXISTS SELLERS (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, phone TEXT, hire_date TEXT)');

  // Таблиця ЗАМОВНИКИ
  db.run('CREATE TABLE IF NOT EXISTS CUSTOMERS (id INTEGER PRIMARY KEY, name TEXT, city TEXT, address TEXT, phone TEXT, representative TEXT)');

  // Таблиця ПОСТАЧАЛЬНИКИ
  db.run('CREATE TABLE IF NOT EXISTS SUPPLIERS (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, city TEXT)');

  // Таблиця ТОВАРИ
  db.run('CREATE TABLE IF NOT EXISTS PRODUCTS (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, unit TEXT, price REAL, supplier_id INTEGER, FOREIGN KEY(supplier_id) REFERENCES SUPPLIERS(id))');

  // Таблиця ЗАМОВЛЕННЯ
  db.run('CREATE TABLE IF NOT EXISTS ORDERS (id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INTEGER, seller_id INTEGER, order_date TEXT, FOREIGN KEY(customer_id) REFERENCES CUSTOMERS(id), FOREIGN KEY(seller_id) REFERENCES SELLERS(id))');

  // Таблиця ЗАМОВЛЕНО
  db.run('CREATE TABLE IF NOT EXISTS ORDERED (order_id INTEGER, product_id INTEGER, quantity INTEGER, PRIMARY KEY (order_id, product_id), FOREIGN KEY(order_id) REFERENCES ORDERS(id), FOREIGN KEY(product_id) REFERENCES PRODUCTS(id))');
});

console.log("Database and tables created successfully");

// Закриваємо базу даних
db.close();
