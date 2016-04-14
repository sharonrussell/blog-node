var express = require('express')
  , app = express()
var Entries = require('../app/entries')

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  var entries = new Entries().get();
  res.render('index', {"entries": entries['entries']});
});

app.listen(3000, function() {
    console.log('Listening on port 3000...')
})
