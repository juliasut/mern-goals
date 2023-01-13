const express = require('express');
const goalsRouter = express.Router();

goalsRouter.get('/', (req, res) => {
  return res.status(200).json({ message: 'Get goals' });
});

goalsRouter.post('/', (req, res) => {
  return res.status(201).json({ message: 'Set goals' });
});

goalsRouter.put('/:id', (req, res) => {
  return res.status(200).json({ message: `Update goal ${req.params.id}` });
});

goalsRouter.delete('/:id', (req, res) => {
  return res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = goalsRouter;
