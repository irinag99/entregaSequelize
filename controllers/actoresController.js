const db = require('../database/models/index.js')
const sequelize = db.sequelize; 
const Actor = db.Actor;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {
    validationResult 
} = require('express-validator');

const actoresController = {
    detalle: function(req, res){
        Actor.findByPk(req.params.id,{
            include: ['peliculas']
        })
        .then(function(resultado){
            res.render('actor', {resultado})
        })
    }
}



module.exports = actoresController;