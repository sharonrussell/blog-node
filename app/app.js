var express = require('express')
  , app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function() {
    console.log('Listening on port 3000...')
})
