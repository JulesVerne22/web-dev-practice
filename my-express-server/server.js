const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req,res){
    res.send("Contact me at: juliari114@gmail.com");
});

app.get("/about", function(req,res){
    res.send("I'm a Software Engineer who likes to play video games.");
});

app.get("/hobbies", function(req,res){
    res.send("<ul><li>Games</li><li>Code</li><li>Rock Climbing</li></ul>")
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
