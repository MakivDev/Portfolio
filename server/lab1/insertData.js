// server/lab1/insertData.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Вказуємо шлях до бази даних
const dbPath = path.join(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath);

// Дані для таблиці ПРОДАВЦІ
const sellers = [
  { first_name: 'Сергій', last_name: 'Безенко', phone: '234-11-56', hire_date: '01.01.2014' },
  { first_name: 'Ольга', last_name: 'Дроздова', phone: '234-11-57', hire_date: '01.01.2013' },
  { first_name: 'Ірина', last_name: 'Білаш', phone: '266-34-17', hire_date: '01.10.2011' },
  { first_name: 'Дмитро', last_name: 'Певченко', phone: '266-45-68', hire_date: '01.02.2012' }
];

// Дані для таблиці ЗАМОВНИКИ
const customers = [
  { name: 'Ресторан "Київ"', city: 'Київ', address: 'бул.Шевченко, 4', phone: '413-10-24', representative: 'Кравченко' },
  { name: 'Ресторан "Баварія"', city: 'Київ', address: 'прос. Науки, 24', phone: '265-90-71', representative: 'Драговоз' },
  { name: 'Кафе "Хвилинка"', city: 'Київ', address: 'вул. Корольова, 4', phone: '434-78-09', representative: 'Авраменко' },
  { name: 'Столова НАУ', city: 'Київ', address: 'прос. Комарова, 1', phone: '266-55-85', representative: 'Меньшова' },
  { name: 'Готель «Мир»', city: 'Київ', address: 'вул. Хрещатик, 32', phone: '243-11-22', representative: 'Ситник' }
];

// Дані для таблиці ПОСТАЧАЛЬНИКИ
const suppliers = [
  { name: 'Агрофірма "Маків"', city: 'с. Маків' },
  { name: 'Завод "Риба"', city: 'Керч' },
  { name: 'ЗАО "Оболонь"', city: 'Київ' },
  { name: 'Молокозавод №1', city: 'Київ' },
  { name: 'ОАО "М’ясо/птиця"', city: 'Шепетівка' },
  { name: 'Фірма "Світоч"', city: 'Львів' }
];

// Дані для таблиці ТОВАРИ
const products = [
  { name: 'Сардини в томаті', unit: 'Упаковка', price: 500.00, supplier_id: 2 },
  { name: 'Шпроти в маслі', unit: 'Упаковка', price: 700.00, supplier_id: 2 },
  { name: 'Пиво темне', unit: 'Бутилка', price: 35.00, supplier_id: 3 },
  { name: 'Пиво світле', unit: 'Банка', price: 33.00, supplier_id: 3 },
  { name: 'Овочі', unit: 'Центнер', price: 150.00, supplier_id: 1 },
  { name: 'Кілька в томаті', unit: 'Упаковка', price: 110.00, supplier_id: 2 },
  { name: 'Цукерки "Ірис"', unit: 'Ящик', price: 432.00, supplier_id: 6 },
  { name: 'Цукерки "Прометей"', unit: 'Коробка', price: 217.00, supplier_id: 6 },
  { name: 'Цукерки "Асорті"', unit: 'Коробка', price: 198.00, supplier_id: 6 },
  { name: 'Картопля', unit: 'Центнер', price: 105.00, supplier_id: 1 },
  { name: 'М’ясо', unit: 'Упаковка', price: 600.00, supplier_id: 5 },
  { name: 'Птиця', unit: 'Шт.', price: 311.00, supplier_id: 5 },
  { name: 'Молоко', unit: 'Упаковка', price: 815.00, supplier_id: 4 },
  { name: 'Сметана', unit: 'Упаковка', price: 700.00, supplier_id: 4 }
];

// Дані для таблиці ЗАМОВЛЕННЯ
const orders = [
  { customer_id: 3, seller_id: 1, order_date: '03.01.2024' },
  { customer_id: 4, seller_id: 3, order_date: '08.01.2024' },
  { customer_id: 3, seller_id: 1, order_date: '11.01.2024' },
  { customer_id: 1, seller_id: 1, order_date: '23.01.2024' },
  { customer_id: 5, seller_id: 4, order_date: '04.02.2024' }
];

// Дані для таблиці ЗАМОВЛЕНО
const orderedProducts = [
  { order_id: 1, product_id: 1, quantity: 400 },
  { order_id: 1, product_id: 6, quantity: 500 },
  { order_id: 1, product_id: 13, quantity: 50 },
  { order_id: 1, product_id: 12, quantity: 50 },
  { order_id: 2, product_id: 2, quantity: 60 },
  { order_id: 2, product_id: 4, quantity: 500 },
  { order_id: 2, product_id: 6, quantity: 350 },
  { order_id: 2, product_id: 7, quantity: 100 }
];

// Функція для вставки даних в базу
const insertData = (tableName, data) => {
  data.forEach(item => {
    const placeholders = Object.keys(item).map(() => '?').join(',');
    const values = Object.values(item);
    const query = `INSERT INTO ${tableName} (${Object.keys(item).join(',')}) VALUES (${placeholders})`;

    db.run(query, values, function (err) {
      if (err) {
        console.error(`Error inserting into ${tableName}:`, err);
      }
    });
  });
};

// Вставляємо дані в таблиці
insertData('SELLERS', sellers);
insertData('CUSTOMERS', customers);
insertData('SUPPLIERS', suppliers);
insertData('PRODUCTS', products);
insertData('ORDERS', orders);
insertData('ORDERED', orderedProducts);

// Закриваємо базу даних після заповнення
db.close(() => {
  console.log('Data inserted successfully.');
});
