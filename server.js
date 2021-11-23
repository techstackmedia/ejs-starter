var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  var mascots = [
    { name: "Bello", organization: "Decagon", birth_year: 1981 },
    { name: "Ify", organization: "Google", birth_year: 1991 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ];
  var tagline =
    "No programming concept is complete without a cute animal mascot.";

  res.render("pages/index", {
    mascots: mascots,
    tagline: tagline,
  });
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/contact");
});

app.listen(8080);
console.log("Server is listening on port 8080");

// name
// email
// age
// gender
// address
// role
