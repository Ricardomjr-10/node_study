
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

const insereCliente = async (cliente) => {
    const connection = await conectar()
    const sql = 'INSERT INTO cliente_node (nome, idade) VALUES (?, ?)'
    const valores = [cliente.nome, cliente.idade]
    await connection.query(sql, valores)
}

const atualizaCliente = async (id, cliente) => {
    const connection = await conectar()
    const sql = 'UPDATE cliente_node SET nome = ?, idade = ? WHERE id = ?'
    const valores = [cliente.nome, cliente.idade, id]
    await connection.query(sql, valores)
}

module.exports = {todosClientes, insereCliente, atualizaCliente}