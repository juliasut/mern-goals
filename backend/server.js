const express = require('express');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const goalsRouter = require('./routes/goalsRouter');
const usersRouter = require('./routes/usersRouter');
const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());

/* 
The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
*/
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalsRouter);
app.use('/api/users', usersRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
