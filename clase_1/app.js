const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');
const generosRouter = require('./routes/generos');
const actoresRouter = require('./routes/actores');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');



//template engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded())
app.use(methodOverride('_method'));


app.listen(3200, function(){
    console.log('running on 3200');
})


//rutas
app.use('/movies', moviesRouter);
app.use('/generos', generosRouter);
app.use('/actores', actoresRouter);