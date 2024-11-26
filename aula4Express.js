const express = require('express')
const app = express()
const porta = process.env.PORT 

app.get('/', (req, res) => {
    res.send('Seja bem vindo!')
})

app.get('/canal', (req, res) => {
    res.json({canal: 'CFB cursos'})
})

app.listen(porta || 3000, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})