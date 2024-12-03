const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://ricardomjr2:lGKU9Ah8c6K1IU0H@cluster0.6vpip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(url, (erro, banco) => {
    if (erro) throw erro
    const dbo = banco.db("cfbcursos")
    const obj = {
        curso: "Curso de Node.js",
         canal: "CFB Cursos"}
})