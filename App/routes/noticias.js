module.exports = function(app){

    /* Inicio modulo para conecção dom o banco de dados */
    
        app.get('/noticias', function(req, res){
    
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host :'localhost',
            user : 'root',
            password : 'Mauro@123',
            database : 'projeto2'
        });
    
        /* executando consulta dentro do mysql */
            connection.query('select *  from noticias', function(erro, result){
            /* tratativa do retorno dado após consulta do banco */
                    res.send(result);

        });

        });
    
};
