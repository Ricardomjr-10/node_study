// criando servidor
const http = require('http')
//criando eventos

const porta = process.env.PORT || 3000
const retorno = () => console.log(`Servidor rodando na porta ${porta}`)
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('CBF cursos')
    res.end()
})

server.listen(porta, retorno)