const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users-data', userController.getUsersData);

module.exports = router