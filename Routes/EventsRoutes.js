const express = require('express');
const router = express.Router();
const EventsController = require('../Controllers/EventsController');
const AuthToken = require('../middlewares/AuthToken')


router.get('/', EventsController.listAllEvents);
router.get('/:id', EventsController.getEvent);
router.post('/', AuthToken, EventsController.createEvent);
router.put('/:id', EventsController.editEvent);
router.delete('/:id', AuthToken, EventsController.deleteEvents);

router.post('/:id/inscricao', AuthToken, EventsController.subscribe);


module.exports = router;
