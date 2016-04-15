var express = require('express')
  , app = express()
  MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

MongoClient.connect('mongodb://localhost:27017/blog', function(err, db){
	app.get('/', function(req, res){
		db.collection('entries').find({}).toArray(function(err, docs){
			res.render('index', {'entries' : docs});
		});
	});
});

app.listen(3000, function() {
    console.log('Listening on port 3000...')
})
