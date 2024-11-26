const http = require('http')
const porta = process.env.PORT 

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.writeHead({'Content-Type': 'text/plain'})
    res.end('CFB cursos')
})

server.listen(porta || 3000, 'Servidor rodando em http://localhost:3000')