const express = require('express');
const router = express.Router();
const controllers = require('../controllers/article');

router.post('/', controllers.create);

module.exports = router;
