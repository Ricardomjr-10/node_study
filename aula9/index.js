// criando servidor
const http = require('http')
const porta = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    