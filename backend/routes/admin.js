// backend/routes/admin.js
const express = require('express');
const router = express.Router();
const { addUser, deleteUser, getAllUsers } = require('../controllers/userController');

// Get all users
router.get('/users', getAllUsers);

// Add a new user
router.post('/users', addUser);

// Delete a user
router.delete('/users/:id', deleteUser);

module.exports = router;
