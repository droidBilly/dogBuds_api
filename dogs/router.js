const Router = require("express").Router;
const router = new Router();
const apiCall = require("request");

const breeds = [
"affenpinscher",
"african",
"airedale",
"akita",
"appenzeller",
"basenji",
"beagle",
"bluetick",
"borzoi",
"bouvier",
"boxer",
"brabancon",
"briard",
"bulldog",
"bullterrier",
"cairn",
"chihuahua",
"chow",
"clumber",
"collie",
"coonhound",
"corgi",
"dachshund",
"dane",
"deerhound",
"dhole",
"dingo",
"doberman",
"elkhound",
"entlebucher",
"eskimo",
"germanshepherd",
"greyhound",
"groenendael",
"hound",
"husky",
"keeshond",
"kelpie",
"komondor",
"kuvasz",
"labrador",
"leonberg",
"lhasa",
"malamute",
"malinois",
"maltese",
"mastiff",
"mexicanhairless",
"mountain",
"newfoundland",
"otterhound",
"papillon",
"pekinese",
"pembroke",
"pinscher",
"pointer",
"pomeranian",
"poodle",
"pug",
"pyrenees",
"redbone",
"retriever",
"ridgeback",
"rottweiler",
"saluki",
"samoyed",
"schipperke",
"schnauzer",
"setter",
"sheepdog",
"shiba",
"shihtzu",
"spaniel",
"springer",
"stbernard",
"terrier",
"vizsla",
"weimaraner",
"whippet",
"wolfhound"
]

router.get("/thumbnail/:id", (req, res, next) => {
 const dogId = req.params.id
     var uri = "https://dog.ceo/api/breed/" + breeds[dogId] + "/images";
         apiCall(
           {
             url: uri,
             json: true
           },
           function(error, response, body) {
             if (!error && response.statusCode === 200) {
               let breed = breeds[dogId]
               // apiCall(body.message).pipe(res);
               res.json({
                 thumbnail: body.message[0]
               })
               res.end()

             } else {
               // res.json(error)
             }
           })
         })

router.get("/sniffing/:id", (req, res, next) => {
 const dogId = req.params.id
     var uri = "https://dog.ceo/api/breed/" + breeds[dogId] + "/images/random";
         apiCall(
           {
             url: uri,
             json: true
           },
           function(error, response, body) {
             if (!error && response.statusCode === 200) {
               let breed = breeds[dogId]
               // apiCall(body.message).pipe(res);
               res.json({
                 id: dogId,
                 breed: breed,
                 image: body.message
               })
               res.end()

             } else {
               // res.json(error)
             }
           })
         })


module.exports = router;
