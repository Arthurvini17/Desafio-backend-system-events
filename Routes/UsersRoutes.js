const express = require('express');
const router = express.Router();

const UsersControllers = require('../Controllers/UsersController');

router.get('/', UsersControllers.getAllUsers);
router.get('/:id', UsersControllers.getUserById);

module.exports = router;