var express = require('express');
var app = express();

// app.get('/', function(req, res){
// 	res.send('Hello world from server.js');
// });
app.use(express.static(__dirname));

app.listen(3000);
console.log('server running on port 3000');