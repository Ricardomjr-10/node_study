const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://ricardomjr2:lGKU9Ah8c6K1IU0H@cluster0.6vpip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('cfbcursos');
    const collection = database.collection('cursos');

    const doc = {
      curso: "Curso de Node.js",
      canal: "CFB Cursos"
    };

    const result = await collection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);