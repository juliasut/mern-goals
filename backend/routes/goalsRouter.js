const express = require('express');
const goalsRouter = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalsController');

goalsRouter.get('/', getGoals);
goalsRouter.post('/', setGoal);

goalsRouter.put('/:id', updateGoal);
goalsRouter.delete('/:id', deleteGoal);

module.exports = goalsRouter;
