const express = require('express');
const router = express.Router();
const generosController = require('../controllers/generosController');
const validations = require('../middlewares/validations')


router.get('/:id', generosController.detalle);


module.exports = router;