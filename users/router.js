const Router = require("express").Router;
const Users = require("./model");
const bcrypt = require('bcrypt')
const sign = require('../jwt').sign
const router = new Router();

//Check if User
const requireUser = (req, res, next) => {
	if (req.user) next()
	else res.status(401).send({
		message: 'Please login'
	})
}

// Testing only - get all users
router.get('/users', (req, res) => {
   const users = Users
   .findAll()
   .then(users => {
       res.json(users)
   })
   .catch(err => {
     console.log(err)
     res.status(500)
     res.json({message: "There was a server error"})
   })
})


// Get a user by id
router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const users = Users
    .findById(userId).then(user => {
      if(user){
        res.status(201)
        res.json(user)
      } else {
        res.status(404)
        res.json({ message: "User not found"})
      }
    })
  .catch(err => {
    res.status(500).send({
      message: `Something went wrong`,
      err
    })
  })
});

// Create a new user
// http post :4001/users info="{ 'username': 'x x', 'preferences': {'african': 9,'appenzeller': 9}"
// This needs checking as we want the user data to be in JSON in the database
router.post('/users', (req, res) => {
  console.log(req.body.email)
  const user = {
  	email: req.body.email,
  	password: bcrypt.hashSync(req.body.password, 10),
                  info: { 'username': req.body.username , 'preferences': []}
  }
  console.log(user)
  Users
    .create(user)
    .then(entity => {
      res.status(201)
      res.json({
          		message: 'user created!'
          	})
    })
    .catch(err => {
    	console.error(err)
    	res.status(500).send({
    		message: 'Something went wrong'
    	})
    })
})

// Update User
//http put :4001/users/1 info="{ 'username': 'x x', 'preferences': {'african': 9,'appenzeller': 9}"
router.put('/users/:id', (req, res) => {
    const usersId = Number(req.params.id)
    const updates = req.body

    Users.findById(req.params.id)
      .then(entity => {
        if(entity){
          return entity.update(updates)
        } else {
          res.status(404)
          res.json({ message: "User not found, can't update."})
        }
      })
      .then(final => {
        // return update
        res.status(200)
        res.send(final)
      })
      .catch(error => {
        res.status(500)
        res.json({
          message: "There was an error. No update."
        })
      })
  })

  router.post('/login', (req, res) => {
  Users
	.findOne({
		where: {
			email: req.body.email
		}
	})
	.then(entity => {
		if (bcrypt.compareSync(req.body.password, entity.password)) {
			res.send({
				jwt: sign(entity.id)
			})
		}
		else {
			res.status(400).send({
				message: 'Password was incorrect'
			})
		}
	})
	.catch(err => {
		console.error(err)
		res.status(500).send({
			message: 'Something went wrong'
		})
	})
})

router.get('/secret', (req, res) => {
	if (req.user) {
		res.send({
			message: `Welcome, you should be the user with email ${req.user.email}`
		})
	}
	else {
		res.status(401).send({
			message: 'Please login!'
		})
	}
})

module.exports = router
