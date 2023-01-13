const asyncHandler = require('express-async-handler');

// @desc GET goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: 'Get goals' });
});

// @desc SET goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  return res.status(201).json({ message: 'Set new goal' });
});

// @desc UPDATE goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc DELETE goal
// @route DELETE /api/goal/:id
// @access Private
const deleteGoal = async (req, res) => {
  return res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
