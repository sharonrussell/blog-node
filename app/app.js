var express = require('express')
  , app = express()

app.get('/', function (req, res) {
  res.send('Site under construction!');
});

app.listen(3000, function() {
    console.log('Listening on port 3000...')
})
