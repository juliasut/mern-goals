const express = require('express');
const goalsRouter = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalsController');

const {protect} = require('../middleware/authMiddleware')

goalsRouter.get('/', protect, getGoals);
goalsRouter.post('/', protect, setGoal);

goalsRouter.put('/:id', protect, updateGoal);
goalsRouter.delete('/:id', protect, deleteGoal);

module.exports = goalsRouter;
