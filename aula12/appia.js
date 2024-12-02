const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/upload' && req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Erro ao processar o formulário:', err);
        res.statusCode = 500;
        res.end('Erro no upload');
        return;
      }

      const oldpath = files.arquivo.filepath;
      const newpath = './uploads/' + files.arquivo.originalFilename;

      fs.rename(oldpath, newpath, (err) => {
        if (err) throw err;
        res.statusCode = 200;
        res.end('Arquivo enviado com sucesso!');
      });
    });
  } else {
    res.statusCode = 404;
    res.end('Página não encontrada');
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});