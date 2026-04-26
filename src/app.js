const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.routes');
const sequelize = require('./config/db');
const User = require('./models/user.model');
const testRoutes = require('./routes/test.routes');
const Student = require('./models/student.model');
const studentRoutes = require('./routes/student.routes');



app.use(express.json());

// DB connect
sequelize.authenticate()
  .then(() => console.log("Database connected ✅"))
  .catch(err => console.log(err));

// create tables
sequelize.sync()
  .then(() => console.log("Tables created ✅"));

app.get('/', (req, res) => {
  res.send("ERP Backend Running 🚀");
});

app.use('/api/auth', authRoutes);


app.use('/api/test', testRoutes);


sequelize.sync()
  .then(() => console.log("Tables synced ✅"));


app.use('/api/students', studentRoutes);  

module.exports = app;