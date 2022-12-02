const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check you rdata entry, no name was given"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit!",
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour for me",
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Weird texture",
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit."
});

// pineapple.save();

const person = new Person({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple
});

// person.save();

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    
    for (var i = 0; i < fruits.length; i++) {
      console.log(fruits[i].name);
    }
  }
});

// Fruit.updateOne({name: "Kiwi"}, {rating: 9}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Update successful");
//   }
// });

// Fruit.deleteOne({name: "Kiwi"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Deleted successfully");
//   }
// });

const dragonfruit = new Fruit({
  name: "Dragonfruit",
  rating: 10,
  review: "It's so exotic"
});

dragonfruit.save();

Person.updateOne({name: "John"}, {favoriteFruit: dragonfruit}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Updated John's favorite fruit");
  }
});

console.log("Done");
