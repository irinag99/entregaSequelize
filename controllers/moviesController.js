const db = require('../database/models/index.js')
const sequelize = db.sequelize; 
const Movie = db.Movie;
const Genero = db.Genero;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {
    validationResult 
} = require('express-validator');
const generosController = require('./generosController');

const moviesController = {

//index: function(req, res){

//return res.send ('llegamos')
//sequelize.query('SELECT * FROM movies')
// .then(function(results){
//     let moviesAll = results[0] //tiene un array de 2 posiciones. necesitamos la posicion 0
//      
// return res.send(moviesAll); chequear que los datos llegan 
//          return res.render('movies', { moviesAll });
//        })
//    }
   
    index: function(req, res){
        Movie.findAll()
        .then(function(results){ //aca estan los resultados directos. no hay un array
            let moviesAll = results;
            return res.render('movies', { moviesAll: moviesAll });
        })
    
   },
   detail: function(req, res){
       Movie.findByPk(req.params.id, {
           include: ['actores', 'genero']
       })
       .then(function(resultado){
        return res.render('detalle', { resultado })
       })
   },
   delete: function(req, res){
       const id = req.params.id
       Movie.destroy({
        where: {
          id: req.params.id
        }
      })  
       .then(function(resultado){
          return res.redirect('/movies')
       })
       .catch(function(error){
        console.log(error)
       })
   },
   edit: function(req, res){
       const pelicula = Movie.findByPk(req.params.id);
       const genero = Genero.findAll();
       Promise.all([pelicula, genero])
        .then(function([resultado, genero]){

            return res.render('formulario-edit', {resultado, genero})
        })
        .catch(function(errors){
            console.log(errors);
        })
           
   },
   modificar: function(req, res){
       
      Movie.update(req.body, {
        where:{
            id: req.params.id
        }
      })
      .then(resultado => {
          return res.redirect('/movies/details/' + req.params.id)
      })
      .catch(e => console.log(e))
   },
   news: function(req, res){
       Movie.findAll({
       order: [
           ['release_date','DESC']
       ],
       limit: 5
    })
        .then(function(resultados){
        let moviesAll = resultados;
        return res.render('new', { moviesAll: moviesAll });
    })   
   },
   
   recommended: function(req, res){
       Movie.findAll({
           where: {
               rating: {[Op.gte]: 8}
           }
       })
        .then(function(resultados){
        let moviesAll = resultados;
        return res.render('recommended', {moviesAll: moviesAll});
       })
   },
   search: function(req, res){
    Movie.findAll({
        where: {
            title: {[Op.like]: '%' + req.body.searchTitle + '%'}
        },
        order: [
            [req.body.order, 'DESC'],
        ]
    })
    .then(function(results){ 
        let moviesAll = results;
        return res.render('movies', { moviesAll: moviesAll });
    })
   },
   create: function(req, res){
       return res.render('createFormulario')
   },
   createPost: function(req, res){
    let errors = validationResult(req)   
    if(errors.isEmpty()){
        Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            length: req.body.length,
            awards: req.body.awards,
            releaseDate: req.body.releaseDate
        });
        return res.redirect('/movies')
    }else {
        return res.render('createFormulario', {errors:errors.mapped(), old: req.body})
    }
   }
   
}


module.exports = moviesController;