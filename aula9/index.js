// criando servidor
const http = require('http')
//criando eventos
const eventos = require('events')

const EventEmitter = new eventos.EventEmitter()

const final =() => {console.log('fim do processo')}

EventEmitter.on('msg', () => {console.log('evento disparado')})
EventEmitter.on('fim', final)


const porta = process.env.PORT || 3000
const retorno = () => console.log(`Servidor rodando na porta ${porta}`)
const server = http.createServer((req, res) => {
    EventEmitter.emit('msg')
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('CBF cursos')
    EventEmitter.emit('fim')
    res.end()
})

server.listen(porta, retorno)