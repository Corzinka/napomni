const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Настройка подключения к базе данных
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'remindDB',
  password: '',
  port: 5432,
});

// Получение списка напоминаний
app.get('/api/reminders', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        id_remind, 
        description, 
        full_description, 
        date_creation, 
        date_complite, 
        status 
      FROM remind;
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
