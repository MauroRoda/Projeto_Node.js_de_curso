var dbConnection = require('../../config/dbConnection')

module.exports = function(app){

    var connection = dbConnection();
        app.get('/noticias', function(req, res){
    
        /* executando consulta dentro do mysql */
            connection.query('select *  from noticias', function(erro, result){
            /* tratativa do retorno dado após consulta do banco */
                   // res.send(result);
                   res.render("noticias/noticias", {noticias : result});

            });
        });
    
};
