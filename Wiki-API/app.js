const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = new express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = new mongoose.model("Article", articleSchema);

app
  .route("/articles")
  .get(function (req, res) {
    Article.find({}, function (err, foundArticles) {
      if (err) {
        res.send(err);
      } else {
        res.send(foundArticles);
      }
    });
  })

  .post(function (req, res) {
    const articles = [];
    const titles = req.body.titles.split("|");
    const contents = req.body.contents.split("|");
    for (var i = 0; i < titles.length; i++) {
      var newArticle = new Article({
        title: titles[i],
        content: contents[i],
      });

      articles.push(newArticle);
    }

    Article.insertMany(articles, function (err) {
      if (err) {
        console.log(err);
      } else {
        res.send("Successfully added new article(s)");
      }
    });
  })

  .delete(function (req, res) {
    Article.deleteMany({}, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Succesfully deleted all articles");
      }
    });
  });

app
  .route("/articles/:articleTitle")
  .get( function(req,res){
    Article.findOne({title: req.params.articleTitle},function(err, foundArticle){
      if(err){
        res.send(err);
      } else{
        if(foundArticle){
          res.send(foundArticle);
        }else{
          res.send("No articles matching that title were found.");
        }
      }
    });
  })
  .put(function(req,res){
    Article.findOneAndUpdate(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      {overwrite: true},
      function(err){
        if(err){
          res.send(err);
        }else{
          res.send("Successfully updated article");
        }
      });
  })
  .patch(function(req,res){
    Article.updateOne(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      function(err){
        if(err){
          res.send(err);
        }else{
          res.send("Successfully updated article");
        }
      });
  })
  .delete(function(req,res){
    Article.deleteOne(
      {title: req.params.articleTitle},
      function(err){
        if(err){
          res.send(err);
        }else{
          res.send("Successfully deleted article");
        }
      });
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
