const Router = require("express").Router;
const Users = require("./model");

const router = new Router();

// Testing only
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
router.post("/users/:id", (req, res) => {
  const user = req.body;
  User.create(user)
    .then(entity => {
      res.status(201).send(entity);
      res.send({
        message: `Hi ${firstName}, thanks for join the DogBuds community`,
      })
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong`,
        error
      });
    });
});

module.exports = router
