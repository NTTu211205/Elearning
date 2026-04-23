const classController = require('../controllers/class.controller');
var express = require('express');
var router = express.Router();

router.post('/', classController.addClass);

module.exports = router;