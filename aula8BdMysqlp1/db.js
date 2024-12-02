
const conectar = async () => {
    if (global.conexao && global.conexao.state !== 'disconnected')
         return global.conexao
    const mysql = require('mysql2/promise')
    const connection =  mysql.createConnection("mysql://dba:ricardo123@localhost:3306/cbfcursos")
    console.log('Conectado com sucesso!')
    global.conexao = connection
    return connection

}

const todosClientes = async () => {
    const connection = await conectar()
    const [rows] = await connection.query('SELECT * FROM cliente_node')
    return await rows
}

module.exports = {}
