const Router = require("express").Router;
const router = new Router();
const apiCall = require("request");

router.get("/sniffing", (req, res, next) => {
  var uri = "https://dog.ceo/api/breeds/list";


/api/breed/{breed name}/images/random


breed = ["affenpinscher","african","airedale","akita","appenzeller","basenji","beagle","bluetick","borzoi","bouvier"]


"https://dog.ceo/api/breed/" + x + "/images/random";


let breedToLookfor =

  apiCall(
    {
      url: uri,
      json: true
    },
    function(error, response, body) {
      if (!error && res.statusCode === 200) {
        for (let i = 0; i < 10; i++) {
          var uri =
            "https://dog.ceo/api/breed/" + body.message[i] + "/images/random";
          apiCall(
            {
              url: uri,
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
      } else {
        res.json(error);
      }
    }
  );
});

module.exports = router;
