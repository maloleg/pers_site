var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/app')));

const fs = require('fs').promises;

app.get('/', function(req, res){
    fs.readFile(__dirname + "/app/templates/1.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        });
});
app.get('/feedback', function(req, res){

    fs.readFile(__dirname + "/app/templates/feedback.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        });
});

app.get('/chat', function(req, res){

    fs.readFile(__dirname + "/app/templates/chat.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        });
});

app.post('/send_feedback', function(req, res){
    var body = '';
    filePath = __dirname + "/feedbacks.txt";
    req.on('data', function(data) {
        body += data;
    });

    req.on('end', function () {
        fs.appendFile(filePath, body, function () {
            res.end();
        })
    });
    fs.writeFile(filePath, '\n', { flag: 'a+' }, err => {})
    res.redirect('/feedback');
});


const port = 8000;
app.listen(port, ()=>{console.log(`Listening on port ${port}`);});