const http = require('http')

const porta  = 3000
const host = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    if (req.url === '/') {
        res.write('<h1>Seja bem vindo!</h1>')
    } else if (req.url === '/canal') {
        res.write('<h1>Cursos</h1>')
    } else if (req.url === '/curso') {
        res.write('<h1>Curso de Node</h1>')
    } 
    res.end()
})

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
})