const express = require('express');
const { Pool } = require('pg');

const app = express();

const port = process.env.PORT || 5000;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS now');
    res.json({
      status: 'ok',
      service: 'backend',
      database: 'connected',
      timestamp: result.rows[0].now,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      service: 'backend',
      database: 'disconnected',
      message: error.message,
    });
  }
});

app.get('/api', (req, res) => {
  res.json({ message: 'Backend API is running' });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
