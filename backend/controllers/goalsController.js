const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc GET goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  return res.status(200).json(goals);
});

// @desc SET goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  return res.status(201).json(goal);
});

// @desc UPDATE goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    // create if it doesn't exist
    new: true,
  });

  return res.status(200).json(updatedGoal);
});

// @desc DELETE goal
// @route DELETE /api/goal/:id
// @access Private
const deleteGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  await goal.remove();

  return res.status(200).json(req.params.id);
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
