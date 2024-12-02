(async () => {
    const db = require('./db')
    console.log('Inserir novo cliente')
    await db.insereCliente({nome: 'Ricardo', idade: 40})
    console.log('Obter todos os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()