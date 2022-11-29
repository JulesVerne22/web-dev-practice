const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/",function(req,res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const audienceId = fs.readFileSync("/Users/juliansmith/Documents/web-development/mailchimp-audience-id.txt",{encoding: 'utf-8'}).trim();
  const url = "https://us21.api.mailchimp.com/3.0/lists/" + audienceId;
  const options = {
    method: "POST",
    auth: "anystring:" + fs.readFileSync("/Users/juliansmith/Documents/web-development/mailchimp-api-key.txt",{encoding: 'utf-8'}).trim(),
    ca: fs.readFileSync('/Users/juliansmith/Keys/ZscalerRootCertificate.crt')
  };

  const request = https.request(url, options, function(response){
    response.on("data", function(data){
      console.log(response.statusCode);

      if(response.statusCode === 200){
        res.sendFile(__dirname + "/success.html");
      }else{
        res.sendFile(__dirname + "/failure.html");
      }
    });
  });

  request.write(jsonData);
  request.end();

});

app.post("/failure", function(req,res){
  res.redirect("/");
});

app.post("/success", function(req,res){
  res.redirect("/");
});

app.listen(3000,function(){
  console.log("Server is running on port 3000.");
});
