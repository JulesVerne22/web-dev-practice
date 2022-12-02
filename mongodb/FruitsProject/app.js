const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "fruitsDB";

const client = new MongoClient(url);


client.connect(function(err){
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  
  findDocuments(db, function(){
    client.close();
  });
});

const insertDocuments = function(db, callback){
  const collection = db.collection("fruits");

  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Kinda sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Great stuff!"
    }
  ], function(err, result){
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};

const findDocuments = function(db, callback){
  const collection = db.collection("fruits");

  collection.find({}).toArray(function(err, fruits){
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
};