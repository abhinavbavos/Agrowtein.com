// routes/protectedRoutes.js

const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authmiddleware');
const { userDashboard, adminDashboard } = require('../controllers/dashboardController');

// Protected user route
router.get('/user', authMiddleware, userDashboard);

// Protected admin route
router.get('/admin', authMiddleware, adminDashboard);

module.exports = router;
