const express = require('express');
const router = express.Router();
const MainController = require('../Controllers/MainController');

router.get('/', MainController.getHome);

module.exports = router;