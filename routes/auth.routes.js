const express = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');
const {
  signup,
  getUserProfile,
  login,
  logout,
  getPersonalCharts,
  addStocks
} = require('../controllers/auth.controllers')

const router = express.Router();

router.get('/signup', (req, res, next) => res.render('auth/signup'));

// Signup POST route
router.post('/signup', signup)

// User profile GET route (using session to send information)
router.get('/userProfile', getUserProfile);

// Login GET route
router.get('/login', (req, res, next) => res.render('auth/login'));

// Login POST route
router.post('/login', login);

// Logout route to destroy the session (desconect the user and redirect it to the home page)
router.post('/logout', logout);

module.exports = router;