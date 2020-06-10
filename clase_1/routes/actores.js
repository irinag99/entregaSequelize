const express = require('express');
const router = express.Router();
const actoresController = require('../controllers/actoresController');
const validations = require('../middlewares/validations')


router.get('/:id', actoresController.detalle);


module.exports = router;