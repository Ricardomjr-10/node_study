const conectar = async () => {
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection("mysql://root:1234@localhost:3306/aula8")
    console.log('Conectado com sucesso!')
    global.conexao = connection
    return connection

}