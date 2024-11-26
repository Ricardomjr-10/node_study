const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((req, res) => {
 fs.appendFile('teste.txt', 'Curos de Node',(err, arquivo) => {
    if (err) throw err
    console.log('Arquivo criado com sucesso!')
 })
})

server.listen(porta || 3000, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})