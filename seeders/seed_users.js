// ./seeders/seed_users.js

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [

        {info: '{ "customer": "Tim Thomson", "items": {"african": 21,"appenzeller": 24,"basenji": 51,"borzoi": 4}}'},
        {info: '{ "customer": "Bob Bobson", "items": {"affenpinscher": 12,"african": 24,"borzoi": 24,"basenji": 1}}'},
        {info: '{ "customer": "Lucy Lee", "items": {"african": 21,"airedale": 24,"appenzeller": 24,"basenji": 51,"borzoi": 4,"bouvier": 1}}'},
        {info: '{ "customer": "Susi Sandburg", "items": {"affenpinscher": 13,"airedale": 4,"borzoi": 4,"bouvier": 21}}'},
        {info: '{ "customer": "Maria Mbugu", "items": {"bluetick": 1,"akita": 14,"beagle": 24,"basenji": 61, "african": 21,"appenzeller": 24,"borzoi": 4}}'}
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
