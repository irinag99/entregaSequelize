const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');
const bodyParser = require('body-parser');

//template engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded())



app.listen(3200, function(){
    console.log('running on 3200');
})


//rutas
app.use('/movies', moviesRouter)