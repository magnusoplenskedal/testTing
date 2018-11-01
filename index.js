var express = require('express');

var app = express();

app.get("/", (req, res) => {
    console.log("received requestfrom: " + req.headers['x-forwarded-for']);
    res.send("Mega test");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("testTing is listening on port 3000");
});

module.exports = app;