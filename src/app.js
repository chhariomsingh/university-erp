const express = require('express');
const app = express();

const sequelize = require('./config/db');

app.use(express.json());

sequelize.authenticate()
  .then(() => console.log("Database connected ✅"))
  .catch(err => console.log("DB Error:", err));

app.get('/', (req, res) => {
  res.send("ERP Backend Running 🚀");
});

module.exports = app;