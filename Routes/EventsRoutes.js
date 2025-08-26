const express = require('express');
const router = express.Router();
const EventsController = require('../Controllers/EventsController');
const AuthToken = require('../middlewares/AuthToken');
const validateSchema = require('../middlewares/validateSchema');
const createEventSchema = require('../schemas/eventsSchema');


/**
 * @swagger
 * /events:
 *   get:
 *     summary: Lista todos os eventos
 *     tags:
 *       - Events
 *     responses:
 *       200:
 *         description: Lista todos os eventos
 *       404:
 *         description: Nenhum evento encontrado
 */
router.get('/', EventsController.listAllEvents);

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Busca evento por ID
 *     tags:
 *       - Events
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do evento
 *     responses:
 *       200:
 *         description: Evento encontrado
 *       404:
 *         description: Evento não encontrado
 *       400: 
 *         description: ID inválido
 */
router.get('/:id', EventsController.getEvent);




/**
 * @swagger
 * /events:
 *   post:
 *     summary: Cria um novo evento
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Show de Rock"
 *               data:
 *                 type: string
 *                 format: date
 *                 example: "2025-09-15"
 *               local:
 *                 type: string
 *                 example: "Teatro Municipal"
 *     responses:
 *       201:
 *         description: Evento criado com sucesso
 *       400:
 *         description: Erro de validação
 *       401:
 *         description: Não autorizado
 */
router.post(
    '/',
    AuthToken,
    validateSchema(createEventSchema),
    EventsController.createEvent
);

/**
 * @swagger
 * /events/{id}:
 *   put:
 *     summary: Edita um evento existente
 *     tags:
 *       - Events
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do evento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date
 *               local:
 *                 type: string
 *     responses:
 *       200:
 *         description: Evento atualizado com sucesso
 *       404:
 *         description: Evento não encontrado
 *       400:
 *         description: Dados inválidos
 */
router.put('/:id', EventsController.editEvent);

/**
 * @swagger
 * /events/{id}:
 *   delete:
 *     summary: Exclui um evento
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do evento
 *     responses:
 *       200:
 *         description: Evento excluído com sucesso
 *       404:
 *         description: Evento não encontrado
 *       401:
 *         description: Não autorizado
 */
router.delete('/:id', AuthToken, EventsController.deleteEvents);

/**
 * @swagger
 * /events/{id}/inscricao:
 *   post:
 *     summary: Inscreve o usuário em um evento
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do evento
 *     responses:
 *       200:
 *         description: Inscrição realizada com sucesso
 *       404:
 *         description: Evento não encontrado
 *       401:
 *         description: Não autorizado
 */
router.post('/:id/inscricao', AuthToken, EventsController.subscribe);

module.exports = router;

