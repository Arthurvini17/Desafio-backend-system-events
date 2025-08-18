const express = require('express');
const router = express.Router();
const EventsController = require('../Controllers/EventsController');


router.get('/', EventsController.listAllEvents);
router.get('/:id', EventsController.getEvent);
router.post('/', EventsController.createEvent);
router.put('/:id', EventsController.editEvent);


module.exports = router;
