const express = require('express');
const usersRouter = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/usersController');

usersRouter.post('/', registerUser);
usersRouter.post('/login', loginUser);
usersRouter.get('/me', getMe);

module.exports = usersRouter;
