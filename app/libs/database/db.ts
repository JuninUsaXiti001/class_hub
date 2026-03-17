const { Pool } = require('pg')

const pool = new Pool({
    database: process.env.DB_PRODUCTS_NAME,
    host: process.env.DB_PRODUCTS_HOST,
    user: process.env.DB_PRODUCTS_USER,
    password: process.env.DB_PRODUCTS_PASSWORD,
    port: parseInt(process.env.DB_PRODUCTS_PORT || "5432"),
})

try {
  await pool.query('SELECT 1');
  console.log('Conexão OK');
} catch(e) {
  console.error('Falha na conexão:', e);
}

export default pool