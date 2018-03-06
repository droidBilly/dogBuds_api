const Router = require("express").Router;
const User = require("./model");

const router = new Router();

router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  User.findById(userId).then(user => {
    res.send(user);
  })
  .catch(err => {
    response.status(500).send({
      message: `Something went wrong`,
      error
    })
  })
});


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
