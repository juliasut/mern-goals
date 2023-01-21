const express = require('express');
const usersRouter = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/usersController');
const {protect} = require('../middleware/authMiddleware')

usersRouter.post('/', registerUser);
usersRouter.post('/login', loginUser);
usersRouter.get('/me', protect, getMe);

module.exports = usersRouter;
