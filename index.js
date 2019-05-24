var express = require('express'),
engines = require('consolidate'),
handlebars = require('handlebars');
const assert = require('assert');
var app = express();
var fs = require ('fs');
var visitas = {};

visitas.general = [];
visitas.registro = [];

fs.readFile(__dirname + '/public/docs/database.txt', (err, data) => {
    if (err) {

    } else {
        visitas = JSON.parse(data);
    }

});

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
    vistas("Home");
    response.render('home', contexto);

});

app.get('/fun', function (request, response) {
   
    var contexto ={
        
        numero: 100,
        visitas: 0

    }
    vistas("Fun");
    response.render('fun', contexto);

});

app.get('/admi', function (request, response) {
   
    let contexto = { layout: false, visitas: visitas };
    vistas("Admi");
    response.render('admi', contexto);

});

app.get('/bore', function (request, response) {
   
    var contexto ={
        
        numero: 100,
        visitas: 0

    }

    vistas("Bore");
    response.render('bore', contexto);

});




app.listen(3000, function () {
    console.log('Estoy funcionando bien sensualón, ¡escuchando en el puerto 3000!');
});


function vistas(url) {
    if (visitas.general.length != 0) {
        let encontrado = false;
        visitas.general.forEach((vis, index) => {
            if (vis.url == url) {
                vis.visitas++;
                let vist = vis.visitas;
                encontrado = true;
                visitas.registro.push({ url: url, visitas: vist, fecha: new Date() });
            }
        });


        if (encontrado == false) {
            visitas.general.push({ url: url, visitas: 1, fecha: new Date() });
            visitas.registro.push({ url: url, visitas: 1, fecha: new Date() });
        }

    } else {
        visitas.general.push({ url: url, visitas: 1, fecha: new Date() });
        visitas.registro.push({ url: url, visitas: 1, fecha: new Date() });
    }

    fs.writeFile('registro.txt', JSON.stringify(visitas), 'utf8', function () { });
}