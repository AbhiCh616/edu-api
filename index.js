const { MongoClient } = require("mongodb");

// App's MongoDB deployment's connection string
const uri =
  "mongodb+srv://abhich1607:bKz7TxBh1OAjMXXc@edu-cluster.z6ll4kn.mongodb.net/?retryWrites=true&w=majority";

// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the app's database
    const database = client.db("edu-database");
    // Create Collection
    db.createCollection("");

    const movies = database.collection("movies");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
