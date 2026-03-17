const { Pool } = require('pg')

const pool = new Pool({
    database: process.env.DB_PRODUCTS_NAME,
    host: process.env.DB_PRODUCTS_HOST,
    user: process.env.DB_PRODUCTS_USER,
    password: process.env.DB_PRODUCTS_PASSWORD,
    port: parseInt(process.env.DB_PRODUCTS_PORT || "5432"),
})

export default pool