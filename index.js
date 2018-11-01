var express = require('express');

var app = express();

app.get("/", (req, res) => {
    console.log("received requrest");
    res.send("hello world med npm install");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("testTing is listeing on port 3000");
});

module.exports = app;