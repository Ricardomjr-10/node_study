//upload de arquivos com o modulo formidable

const http = require('http');
const port = process.env.PORT || 3000;
const formidable = require('formidable')
const fs = require('fs')


const server = http.createServer((req, res) => {
    if (req.url == '/upload') {
        const form = new formidable.IncomingForm()
        form.parse(req, (erro, fields, files) => {
            const oldpath = files.filetoupload.path
            const newpath = 'C:/home/ricardo/Documentos/envio/' + files.filetoupload.path
            fs.rename(oldpath, newpath, (erro) => {
                if (erro) throw erro
                res.write('Arquivo carregado com sucesso!')
                res.end()
            })
        })
    } else {

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<form action="/upload" method="POST" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>')
        res.write('<input type="submit" value="Enviar">')
        res.write('</form>')
        return res.end()
    }

})

server.listen(port)