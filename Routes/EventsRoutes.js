const express = require('express');
const router = express.Router();
const EventsController = require('../Controllers/EventsController');


router.get('/:id', EventsController.getEvent);

module.exports = router;
