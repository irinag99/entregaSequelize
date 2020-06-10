const {
    body
} = require('express-validator')

module.exports = {
    create: [
        body('title').trim().notEmpty().withMessage('campo obligatorio'),
        
        body('awards').trim().notEmpty().withMessage('campo obligatorio').bail()
        .isInt().withMessage('campo numerico'),

        body('rating').trim().notEmpty().withMessage('campo obligatorio').bail()
        .isInt().withMessage('campo numerico'),

        body('releaseDate').notEmpty().withMessage('campo obligatorio'),

        body('length').trim().notEmpty().withMessage('campo obligatorio').bail()
        .isInt().withMessage('campo numerico')
    ]
}