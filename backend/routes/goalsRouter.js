const express = require('express');
const goalsRouter = express.Router();

goalsRouter.get('/', (req, res) => {
  return res.status(200).json({ message: 'Get goals' });
});

module.exports = goalsRouter;
