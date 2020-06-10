const db = require('../database/models/index.js')
const sequelize = db.sequelize; 
const Genero = db.Genero;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {
    validationResult 
} = require('express-validator');

const generosController = {
    detalle: function(req, res){
        Genero.findByPk(req.params.id,{
            include: ['Peliculas']
        })
        .then(function(resultado){
            res.render('genero', {resultado})
        })
    }
}



module.exports = generosController;