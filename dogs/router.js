const Router = require("express").Router;
const router = new Router();
const apiCall = require("request");

router.get("/sniffing", (req, res, next) => {
  var uri = "https://dog.ceo/api/breeds/list";
  apiCall(
    {
      uri: uri,
      json: true
    },
    function(error, response, body) {
      if (!error && res.statusCode === 200) {
        console.log(body.message);
        for (let i = 0; i < 10; i++) {
          var uri = "https://dog.ceo/api/breed/" + body.message[i] + "/images/random";
          apiCall(
            {
              uri: uri,
              json: true
            },
            function(error, response, body) {
              if (!error && response.statusCode === 200) {
                res.json(body.message);
              } else {
                res.json(error);
     }
            }
          );
        }
      }
    }
  );
});

module.exports = router;