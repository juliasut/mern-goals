const express = require('express');
const dotenv = require('dotenv').config();

const goalsRouter = require('./routes/goalsRouter');
const PORT = process.env.PORT || 8000;

const app = express();

app.use('/api/goals', goalsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
