const express = require('express');
const router = express.Router();

const AuthController = require('../Controllers/AuthController');
const AuthToken = require('../middlewares/AuthToken');

/**
 * @swagger
 * /:
 *   post:
 *     summary: Faz login do usuário
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "arthur@email.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Email ou senha inválidos
 */

router.post('/', AuthController.auth);

/**
 * @swagger
 * /protegida:
 *   get:
 *     summary: Acessa rota protegida
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acesso autorizado
 *       401:
 *         description: Token inválido ou ausente
 */
router.get('/protegida', AuthToken, AuthController.protected);

module.exports = router;