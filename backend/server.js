const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();

const goalsRouter = require('./routes/goalsRouter');
const errorHandler = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

/* 
The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
*/
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use('/api/goals', goalsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
