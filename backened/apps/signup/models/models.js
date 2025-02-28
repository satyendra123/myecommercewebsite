const db = require('../../../config/db');

const createUserTable = () => {
  const query = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
  )`;
  
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log('Users table created or already exists');
  });
};

module.exports = { createUserTable };
