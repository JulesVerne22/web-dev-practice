const express = require("express");
const fs = require("fs");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

  const query = req.body.cityName;;
  const apiKey = fs.readFileSync('/Users/juliansmith/Documents/web-development/weather-api-key.txt');
  const unit = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  https.get(url,{ca: fs.readFileSync('/Users/juliansmith/Keys/ZscalerRootCertificate.crt') },function(response){
    console.log(response.statusCode);
  
    var allData = "";
    response.on("data", function(data){
      allData += data.toString();
    }).on("end",function(){
      const weatherData = JSON.parse(allData);
      const temp = weatherData.list[0].main.temp;
      const weatherDescription = weatherData.list[0].weather[0].description;
      const icon = weatherData.list[0].weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<h1>The temperature in " + query + " is " + temp + " degrees Fahrenheit.</h1>");
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<img src=" + imageUrl + ">");
      res.send();
    });
  });

  console.log("Post received");
})


app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
