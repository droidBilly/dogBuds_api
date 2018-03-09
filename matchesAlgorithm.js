// Matching Algoritm

function compareUsers(ourUser, otherUser){
  if (ourUser !== otherUser) {

    let matchingDogs =
        ourUser.info.preferences
            .map(x => otherUser.info.preferences.filter(y => y.breed == x.breed))
            .reduce((a,b) => a.concat(b))
            .map(x => x.breed)

      function calcDogScore(user){

          let sumDogs = function (){
              return user.info.preferences.reduce((sum, breed) => sum + breed.votes , 0)
          }();

          function perc(vote){
              return Math.floor((vote / sumDogs ) * 100)
          }

          function score(user){
              return user.info.preferences
                  .filter(x => matchingDogs.indexOf(x.breed) >= 0 )
                  .reduce((sum, x) =>  {return sum + perc(x.votes)},0 )
          }
          return score(user)
      }

      let sum = (calcDogScore(ourUser) + calcDogScore(otherUser))
      let mean = sum !== 0 ? (sum/2) : 0

      let result = []
        result.push(mean)
        result.push(otherUser.info.username)
        return result
  }
}

function compareAllUsers(currentUser, users) {

  let matches = [];
  for (let i = 1; i < users.length; i++) {

    if(currentUser !== users[i]) {
        matches.push(compareUsers(currentUser, users[i]))
    }
  }
    return matches.sort().slice(0,3).reverse()
}

module.exports.compareAllUsers =  compareAllUsers
