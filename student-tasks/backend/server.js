const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');

app.use(cors());
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
