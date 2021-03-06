var express = require('express')
  , app = express()
  MongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  bodyParser = require('body-parser'),
  ObjectId = require('mongodb').ObjectId;

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));

var port = 3000;
var mongouri = 'mongodb://mongo:27017/blog';

MongoClient.connect(mongouri, function(err, db){

	app.get('/', function(req, res){
		db.collection('entries').find({}).sort({'date': -1}).toArray(function(err, docs){
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

    app.post('/delete/:id', function (req, res) {
        var id = req.params.id;
        db.collection('entries').remove({"_id": ObjectId(id)});
        res.statusCode = 302;
        res.setHeader("Location", '/');
        res.end();
    });
});

app.get('/add', function(req, res){
    res.render('add');
});

app.listen(port, function() {
    console.log('Listening on port ' + port)
});
