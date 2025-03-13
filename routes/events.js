const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventcontroller');

const auth = require('../middleware/auth');
// router.use(auth);

//routes
router.post('/create', eventController.eventCreation);
router.get('/view', eventController.viewEvents);
router.get('/view/:id', eventController.viewEvent);
router.get('/remind/:id', eventController.remindUser);

module.exports = router;