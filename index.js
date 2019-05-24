var express = require('express'),
engines = require('consolidate'),
handlebars = require('handlebars');
const assert = require('assert');
var app = express();


app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



app.get('/', function (request, response) {
   
    var contexto ={
        
        numero: 100,
        visitas: 0

    }
    
    response.render('home', contexto);

});

app.get('/fun', function (request, response) {
   
    var contexto ={
        
        numero: 100,
        visitas: 0

    }
    
    response.render('fun', contexto);

});

app.get('/admi', function (request, response) {
   
    var contexto ={
        
        numero: 100,
        visitas: 0

    }
    
    response.render('admi', contexto);

});

app.get('/bore', function (request, response) {
   
    var contexto ={
        
        numero: 100,
        visitas: 0

    }
    
    response.render('bore', contexto);

});




app.listen(3000, function () {
    console.log('Estoy funcionando bien sensualón, ¡escuchando en el puerto 3000!');
});