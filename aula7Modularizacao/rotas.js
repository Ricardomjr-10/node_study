const express = require('express')
const rotas = express.Router()

let cursosInfo = [
{'curso': 'Node','info': 'Curso de Node'},
{'curso': 'React','info': 'Curso de React'},
{'curso': 'Angular','info': 'Curso de Angular'},
{'curso': 'Vue','info': 'Curso de Vue'}
]

rotas.get('/', (req, res) => {
    res.json({ola: 'Seja bem vindo!'})
})

rotas.get('/:cursoid', (req, res) => {
    const curso = req.params.cursoid
    const cursoInfo = cursosInfo.find(i => i.curso === curso)
    if (!cursoInfo) {
        res.status(404).json({
            erro: 'Curso nao encontrado', cursoPesquisado: curso
        })
    }else {
        res.status(200).json(cursoInfo)
    }
})

module.exports = rotas