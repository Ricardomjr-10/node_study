//upload de arquivos com o modulo formidable

const http = require('http');
const port = process.env.PORT || 3000;
const formidable = require('formidable')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit" value="upload">')
    res.write('</form>')
    return res.end()
})

server.listen(port)