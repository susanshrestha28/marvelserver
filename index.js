var app = require('express')();
var cors = require('cors');
const https = require('https')
var api = require('marvel-api');
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());
var marvel = api.createClient({
  publicKey: 'cbc5e466ee9ff1ee325a1c17b20c3868'
, privateKey: 'ef8ab8438fd3941b085415a8f58a0060dd06a1fd'
});
app.get('/characters',(req,res) => {
  marvel.characters.findAll()
  .then(data => {
    res.send(data);
  })
  .fail(console.error)
  .done();
})
app.post('/findbyname' , (req,res) => {
  console.log(req.body[0])
  marvel.characters.findNameStartsWith(req.body[0])
  .then(data => {
    res.send(data);
  })
  .fail(console.error)
  .done();
}) 
app.listen(3000, () => {
    console.log('server started');
})
