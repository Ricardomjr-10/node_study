const http = require('http')
const url = require('url')
const porta  = 3000
const host = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(req.url)
    const p = url.parse(req.url, true).query
    res.write('<br/>Nome: ' + p.nome)
    res.write('<br/>Curso: ' + p.curso)
    res.end()
})

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
})