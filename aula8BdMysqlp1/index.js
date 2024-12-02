(async () => {
    const db = require('./db')

    // console.log('Inserir novo cliente')
    // const nom = 'Fulano'
    // const ida = 20
    // await db.insereCliente({nome: nom, idade: ida})

    const id = 3
    const nom = 'Fulano'
    const ida = 25
    await db.atualizaCliente(id,{nome: nom, idade: ida})
    console.log('cliente' + id + ' atualizado')

    

    console.log('Obter todos os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()