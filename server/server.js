// server/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const lab1Routes = require('./lab1/lab1Routes');

dotenv.config(); // Завантажуємо конфігурації з .env

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Для підтримки крос-доменних запитів
app.use(express.json()); // Для парсингу JSON

// Підключаємо маршрути для Лабораторної 1
app.use('/api/lab1', lab1Routes);

// Запуск серверу
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
