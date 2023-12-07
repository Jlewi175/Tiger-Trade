const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Database'))
  .catch(error => console.error(error));

const db = mongoose.connection;
db.on('error', (error) => console.error(error));

app.use(cors());
app.use(express.json());

const userRouter = require('./routes/users');
app.use('/users', userRouter);

const itemRouter = require('./routes/items');
app.use('/items', itemRouter);

// Export the app for serverless deployment
module.exports = app;
