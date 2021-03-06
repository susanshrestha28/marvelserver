var app = require('express')();
var cors = require('cors');
//const https = require('https')
var api = require('marvel-api');
port = process.env.PORT || 80
var bodyParser = require('body-parser')
app.use(cors({origin: '*'}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var marvel = api.createClient({
  publicKey: 'cbc5e466ee9ff1ee325a1c17b20c3868'
, privateKey: 'ef8ab8438fd3941b085415a8f58a0060dd06a1fd'
});
app.get('/', (req,res) => {
marvel.characters.findAll()
  .then(data => {
    res.send(data);
  })
  .fail(console.error)
  .done();

})
app.get('/characters' , (req,res) => {
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
app.listen(port, () => {
    console.log('server started');
})
