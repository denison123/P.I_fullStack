const Sequelize = require ('sequelize')
const { DEFAULT_MIN_VERSION } = require('tls')
const sequelize = new Sequelize('materiais','root','',{
    host:'localhost',  
    dialect:'mysql'
})
sequelize.authenticate().then(function(){
    console.log('conectado com sucesso')
})
.catch(function(erro){
    console.log('Falha na conexao: ' + erro)
})
// adicionando tabela em banco de dados 
// const denison = sequelize.define('denison',{
//     titulo: {
//         type: Sequelize.STRING
//     },
//     conteudo:{
//         type: Sequelize.TEXT
//     }
//})
// adicionando dados na tala
// denison.create({
//     titulo: 'lopes',
//     conteudo:'rocha',
//     })
// //denison.sync({force:true})

