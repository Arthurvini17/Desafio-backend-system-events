const express = require('express');
const router = express.Router();

const UsersControllers = require('../Controllers/UsersController');

router.get('/', UsersControllers.getAllUsers);

module.exports = router;