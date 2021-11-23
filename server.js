var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  var mascots = [
    {
      name: "Bello Osagie",
      role: "Stack lead",
      age: 56,
      email: "belloosagie@gmail.com",
      gender: "Male",
    },
  ];
  var tagline = "Below are our special guests";

  res.render("pages/index", {
    mascots: mascots,
    tagline: tagline,
  });
});

// about page
app.get("/contact", function (req, res) {
  res.render("pages/contact");
});

app.listen(8080);
console.log("Server is listening on port 8080");
