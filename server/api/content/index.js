'use strict';

var express = require('express');
var controller = require('./content.controller');

var router = express.Router();

router.get('/', controller.index);
router.all('/refreshCache', controller.refreshCache);
router.get('/:id', controller.show);

module.exports = router;