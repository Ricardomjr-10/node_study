
const conectar = async () => {
    if (global.conexao && global.conexao.state !== 'disconnected')
         return global.conexao
    const mysql = require('mysql2/promise')
    const connection =  mysql.createConnection("mysql://root:1234@localhost:3306/aula8")
    console.log('Conectado com sucesso!')
    global.conexao = connection
    return connection

}

conectar()

module.exports = {}