
var app = require('./config/server')

/*  incluir os modulos de modulos */

var rotaNoticias = require('./app/routes/noticias')(app);


var rotaHome = require('./app/routes/home')(app);



var rota_inclui_noticias = require('./app/routes/formulario_inclui_noticia')(app);



/* comando do server sempre no final */
app.listen(3000, function(){
    console.log('Servidor esta ligado');
});