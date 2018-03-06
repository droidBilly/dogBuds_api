const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const usersRouter = require("./user/router");
const User = require("./user/model");
const dogRouter = require("./dogs/router")

app.use(bodyParser.json())

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

app.get('/', (request, response) => {
      response.send( { message: 'Yay, your setup is workig! Happy coding! BARK! BARK!' })
})


app.use(usersRouter);
app.use(dogRouter);
