const express = require('express');
const router = express.Router();

const UsersControllers = require('../Controllers/UsersController');
const validateSchema = require('../middlewares/validateSchema');
const createUserSchema = require('../schemas/usersSchema');


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nome:
 *                     type: string
 *                     example: "Arthur"
 *                   email:
 *                     type: string
 *                     example: "arthur@email.com"
 */
router.get('/', UsersControllers.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca um usuário por ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nome:
 *                   type: string
 *                   example: "Arthur"
 *                 email:
 *                   type: string
 *                   example: "arthur@email.com"
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/:id', UsersControllers.getUserById);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Arthur"
 *               email:
 *                 type: string
 *                 example: "arthur@email.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro de validação
 */
router.post('/', validateSchema(createUserSchema), UsersControllers.createUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Edita um usuário existente
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Arthur Vinicius"
 *               email:
 *                 type: string
 *                 example: "arthur@email.com"
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       400:
 *         description: Erro de validação
 */
router.put('/:id', UsersControllers.editUser);




module.exports = router;