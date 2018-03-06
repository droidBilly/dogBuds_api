const Router = require("express").Router;
const Users = require("./model");

const router = new Router();

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
router.post("/users", (req, res) => {
  const user = req.body;

  Users.create(user)
    .then(entity => {
      res.status(201)
      res.send(entity);
      //res.json({message: `Hi ${firstName}, thanks for join the DogBuds community`})
    })
    .catch(err => {
      res.status(500)
      res.json({message: `Something went wrong`})
      err
    });
});

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

module.exports = router
