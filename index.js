const express = require('express')
const app = express()
const verify = require('./jwt').verify
const sign = require('./jwt').sign
const Users = require("./users/model");
const bodyParser = require('body-parser')
const dogsRouter = require('./dogs/router')
const userRouter = require('./users/router')


app.use(bodyParser.json())


app.listen(4002, () => console.log('Express API listening on port 4002'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

app.use(function (req, res, next) {
  if (!req.headers.authorization) return next()

  const auth = req.headers.authorization.split(' ')
  if (auth[0] === 'Bearer') {
    verify(auth[1], function (err, jwt) {
      if (err) {
        console.error(err)
        res.status(400).send({
          message: "JWT token invalid"
        })
      }
      else {
        console.log(jwt.id)
        Users
          .findById(jwt.id)
          .then(entity => {
            req.user = entity
            next()
          })
          .catch(err => {
            console.error(err)
            res.status(500).send({
              message: 'Something went horribly wrong'
            })
          })
      }
    })
  }
  else next()
})

app.use(dogsRouter)
app.use(userRouter)
