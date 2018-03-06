const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const usersRouter = require('./users/router')
app.use(usersRouter)

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.get('/', (request, response) => {
      response.send( { message: 'Yay, your setup is workig! Happy coding! BARK! BARK!' })
})
