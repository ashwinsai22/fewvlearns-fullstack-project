const mysql = require("mysql2/promise");

let connection;

/**
 * Initialize DB connection once at app startup
 */
async function initializeConnection() {
  try {
    if (connection) {
      return connection;
    }

    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log("✅ MySQL connected successfully");

    return connection;
  } catch (err) {
    console.error("❌ Error connecting to database:", err);
    throw err;
  }
}

/**
 * Get existing DB connection inside routes/controllers
 */
function getConnection() {
  if (!connection) {
    throw new Error("Database not initialized");
  }
  return connection;
}

module.exports = {
  initializeConnection,
  getConnection,
};
