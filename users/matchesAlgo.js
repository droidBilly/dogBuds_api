function compareUsers(ourUser, otherUser) {
  if (ourUser !== otherUser && otherUser.info.preferences.length != 0 &&  ourUser.info.preferences.length != 0 ) {
    let matchingDogs = ourUser.info.preferences
      .map(x => otherUser.info.preferences.filter(y => y.breed == x.breed))
      .reduce((a, b) => a.concat(b))
      .map(x => x.breed);

    function calcDogScore(user) {
      let sumDogs = (function() {
        return user.info.preferences.reduce(
          (sum, breed) => sum + breed.votes,
          0
        );
      })();

      function perc(vote) {
        return Math.floor(vote / sumDogs * 100);
      }

      function score(user) {
        return user.info.preferences
          .filter(x => matchingDogs.indexOf(x.breed) >= 0)
          .reduce((sum, x) => {
            return sum + perc(x.votes);
          }, 0);
      }
      return score(user);
    }

    let sum = calcDogScore(ourUser) + calcDogScore(otherUser);
    let mean = sum !== 0 ? sum / 2 : 0;

    let result = [];
    result.push({ Score: mean });
    result.push(otherUser.info);
    return result;
  }
}

function compareAllUsers(user1, users) {
  // if (typeof user1 !== "undefined" ) {
    let matches = [];
    for (var i = 0; i < users.length; i++) {
      matches.push(compareUsers(user1, users[i]));
    }
    return matches
      .sort((a, b) => a[0].Score - b[0].Score)
      .slice(0, 10)
      .reverse();


}

module.exports.compareAllUsers = compareAllUsers;
