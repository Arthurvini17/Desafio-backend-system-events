const express = require('express');
const router = express.Router();
const EventsController = require('../Controllers/EventsController');
const AuthToken = require('../middlewares/AuthToken');
const validateSchema = require('../middlewares/validateSchema');
const createEventSchema = require('../schemas/eventsSchema'); // import direto

router.get('/', EventsController.listAllEvents);
router.get('/:id', EventsController.getEvent);

router.post(
    '/',
    AuthToken,
    validateSchema(createEventSchema),
    EventsController.createEvent
);

router.put('/:id', EventsController.editEvent);
router.delete('/:id', AuthToken, EventsController.deleteEvents);

router.post('/:id/inscricao', AuthToken, EventsController.subscribe);

module.exports = router;
