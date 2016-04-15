var express = require('express')
  , app = express()
  MongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  bodyParser = require('body-parser');

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb://localhost:27017/blog', function(err, db){
	app.get('/', function(req, res){
		db.collection('entries').find({}).toArray(function(err, docs){
            this._docs = docs;
			res.render('index', {'entries' : docs});
		});
	});

    app.post('/add', function(req, res, next) {
        var title = req.body.title;
        var body = req.body.body;

        if (title.length == 0 || body.length == 0) {
            res.render('error', {error:'Please complete all fields'});
        } else {
            db.collection('entries').insertOne({"title" : title, "body" : body, "date" : new Date(), "time": new Date().time});
            res.statusCode = 302;
            res.setHeader("Location", '/');
            res.end();
        }
    });
});

app.get('/add', function(req, res){
    res.render('add');
});

app.listen(3000, function() {
    console.log('Listening on port 3000...')
});
