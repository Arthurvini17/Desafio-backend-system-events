const express = require('express');
const router = express.Router();

const AuthController = require('../Controllers/AuthController');
const AuthToken = require('../middlewares/AuthToken');

router.post('/', AuthController.auth);
router.get('/protegida', AuthToken, AuthController.protected);

module.exports = router;