const { createPool } = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool