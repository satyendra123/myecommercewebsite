const express = require('express');
const db = require('./config/db');
const routes = require('./route/url');

const app = express();

app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
