const express = require('express');
const router = express.Router();
const controllers = require('../controllers/article');

router.post('/', controllers.create);
router.put('/', controllers.update);
router.get('/all', controllers.getAll);

module.exports = router;
