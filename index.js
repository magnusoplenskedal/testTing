var express = require('express');

var app = express();

app.get("/", (req, res) => {
    let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
    console.log("received requestfrom: " + ip);
    res.send("Mega test");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("testTing is listening on port 3000");
});

module.exports = app;