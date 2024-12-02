//upload de arquivos com o modulo formidable

const http = require('http');
const port = process.env.PORT || 3000;
const formidable = require('formidable')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url == '/envioDeArquivo') {
        const form = new formidable.IncomingForm()
        form.parse(req, (err, fields, files) => {
            const urlantiga = files.filetoupload.path
            const urlnova = 'C:/Users/ricardo/Downloads/' + files.filetoupload.name
            fs.rename(urlantiga, urlnova, (err) => {
                if (err) throw err
                res.write('Arquivo carregado com sucesso!')
                res.end()
            })
        })
    } else {

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>')
        res.write('<input type="submit" value="upload">')
        res.write('</form>')
        return res.end()
    }

})

server.listen(port)