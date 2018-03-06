// ./seeders/seed_users.js

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [

        {info: '{ "username": "Tim Thomson", "preferences": {"african": 21,"appenzeller": 24,"basenji": 51,"borzoi": 4}}'},
        {info: '{ "username": "Bob Bobson", "preferences": {"affenpinscher": 12,"african": 24,"borzoi": 24,"basenji": 1}}'},
        {info: '{ "username": "Lucy Lee", "preferences": {"african": 21,"airedale": 24,"appenzeller": 24,"basenji": 51,"borzoi": 4,"bouvier": 1}}'},
        {info: '{ "username": "Susi Sandburg", "preferences": {"affenpinscher": 13,"airedale": 4,"borzoi": 4,"bouvier": 21}}'},
        {info: '{ "username": "Maria Mbugu", "preferences": {"bluetick": 1,"akita": 14,"beagle": 24,"basenji": 61, "african": 21,"appenzeller": 24,"borzoi": 4}}'}
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
