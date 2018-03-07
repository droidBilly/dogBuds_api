// ./seeders/seed_users.js
// node_modules/.bin/sequelize db:seed:all
'use strict';

// client.query('INSERT INTO my_table (data) VALUES ($1)', [ JSON.stringify([1,2,3])], handler);


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [

        {info: '' }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
