import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydatabase",
  password: "postgres",
  port: 5432,
});

const createUsersTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY, 
        username VARCHAR(255) NOT NULL,
        balance NUMERIC DEFAULT 0
      );
    `);
    console.log("Table 'users' created or already exists.");
  } catch (err) {
    console.error("Error creating 'users' table:", err);
  }
};

const createTransactionsTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        amount NUMERIC NOT NULL,
        type VARCHAR(10) CHECK (type IN ('income','expense')),
        date DATE DEFAULT CURRENT_DATE
      );
    `);
    console.log("Table 'transactions' created or already exists.");
  } catch (err) {
    console.error("Error creating 'transactions' table:", err);
  }
};

const createTables = async () => {
  await createUsersTable();
  await createTransactionsTable();
};

createTables();

export default pool;
