var Express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = Express();

// Parse JSON
app.use(bodyParser.json());
// Parse forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(Express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
	res.header('Content-Type', 'text/html');
	fs.readFile(__dirname+'/index.htm', function(err, result){
		if(err) return console.error(err);
		res.send(result);
	})
})

app.post('/console-log', function(req, res, next){
	var message = req.body.message;
	if(!message) return res.status(400).send('message is required');
	console.log(message);
	res.send({result: 'success'});
});

app.listen(80);

console.log('Running!');
