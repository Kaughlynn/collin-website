var Express = require('express');
var fs = require('fs');
var app = Express();

app.use(Express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
	res.header('Content-Type', 'text/html');
	fs.readFile(__dirname+'/index.htm', function(err, result){
		if(err) return console.error(err);
		res.send(result);
	})
})

app.listen(80);

console.log('Running!');
