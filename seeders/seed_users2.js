// ./seeders/seed_users.js
// node_modules/.bin/sequelize db:seed:all
'use strict';

// client.query('INSERT INTO my_table (data) VALUES ($1)', [ JSON.stringify([1,2,3])], handler);


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [

      {info: JSON.stringify({username: 'Maria Mbugu', password:"123", age: 89, email: '', image:'' , location: 'In my home', preferences: [{ breed: 'bluetick', votes: 1 },{ breed: 'akita', votes: 24 }, {breed: 'beagle', votes: 24 }, { breed: 'basenji', votes: 1 }] }) },

      {info: JSON.stringify({username: 'Tim Thomson', password:"123", age: 16, email: '', image:'' , location: 'NY', preferences: [{ breed: 'african', votes: 3 },{ breed: 'appenzeller', votes: 6 }, {breed: 'basenji', votes: 51 }, { breed: 'bluetick', votes: 12 }, { breed: 'airedale', votes: 1 }] }) },

      {info: JSON.stringify({username: 'John Jacob', password:"123", age: 31, email: '', image:'' , location: 'Boston', preferences: [{ breed: 'affenpinscher', votes: 14 },{ breed: 'appenzeller', votes: 3 }, {breed: 'basenji', votes: 2 }, { breed: 'borzoi', votes: 12 }, { breed: 'airedale', votes: 51 }] }) },

      {info: JSON.stringify({username: 'Bob Bobson', password:"123", age: 61, email: '', image:'' , location: 'I wont tell you', preferences: [{ breed: 'african', votes: 1 },{ breed: 'appenzeller', votes: 8 }, {breed: 'basenji', votes: 28 }, { breed: 'borzoi', votes: 32 }, { breed: 'bluetick', votes: 5 }] }) },

      {info: JSON.stringify({username: 'Lucy Lee', password:"123", age: 23, email: '', image:'' , location: 'somewhere', preferences: [{ breed: 'african', votes: 101 },{ breed: 'appenzeller', votes: 18 }, {breed: 'akita', votes: 4 }, { breed: 'borzoi', votes: 14 }, { breed: 'airedale', votes: 55 }] }) },

       {info: JSON.stringify({username: 'Susi Sandburg', password:"123", age: 44, email: '', image:'' , location: 'USA', preferences: [{ breed: 'akita', votes: 2 },{ breed: 'appenzeller', votes: 7 }, {breed: 'basenji', votes: 15 }, { breed: 'bluetick', votes: 14 }, { breed: 'airedale', votes: 19 }] }) }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
