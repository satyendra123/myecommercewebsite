const bcrypt = require('bcrypt');
const db = require('../../../config/db');

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: 'Username or email already exists' });
        }
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
      }
      return res.status(201).json({ message: 'User signed up successfully' });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { signup };
