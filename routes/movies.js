const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.index)
router.get('/details/:id', moviesController.detail)
router.get('/details/:id/delete', moviesController.delete)
router.get('/editar/:id', moviesController.edit)
router.post('/details/:id/modificar', moviesController.modificar)
router.get('/new', moviesController.news)
router.get('/recommended', moviesController.recommended)
router.post('/search', moviesController.search)

module.exports = router;