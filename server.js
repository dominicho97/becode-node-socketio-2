/*//HEROKU

const express = require('express');
const app = express();

//set port
const port = process.env.PORT || 8080

app.use(express.static(__dirname));

//routes
app.get('/', function (req, res) {
  res.render("index");
})

app.listen(port, function () {
  console.log("app running")
});
*/

const express = require('express');

//App setup
const app = express();
const server = app.listen(4000, function () {
  console.log('listening to request on port 4000')
})

//Static files
app.use(express.static('public'))