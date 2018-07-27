const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors())

app.get('/products/:id', function (req, res, next) {
 res.json({msg: 'This is CORS-enabled for all origins!'})
})

// app.listen(80, function () {
//  console.log('CORS-enabled web server listening on port 80')
// })

app.use(express.static('client/public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/planet-data', (req, res) => {
  const url = 'https://dry-plains-91502.herokuapp.com/planets';

  fetch(url)
  .then(jsonData => jsonData.json())
  .then(data => res.json(data));
});

app.listen(5000, function () {
  console.log(`App running on port ${ this.address().port }`);
});
