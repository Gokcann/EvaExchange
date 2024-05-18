'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    //add data to the database with bulk insert
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Share', [
        {
      shareSymbol: 'EVA',
      sharePrice: 55.89,
      createDate: Sequelize.fn('NOW')
    },
    {
        shareSymbol: 'EVA',
        sharePrice: 53.73,
        createDate: '2024-05-15 01:01:01'
      },
      {
        shareSymbol: 'EVA',
        sharePrice: 52.11,
        createDate: '2024-05-14 01:01:01'
      },
      {
        shareSymbol: 'APP',
        sharePrice: 12.39,
        createDate: Sequelize.fn('NOW')
      },
      {
        shareSymbol: 'APP',
        sharePrice: 14.78,
        createDate: '2024-05-15 01:01:01'
      },
      {
        shareSymbol: 'APP',
        sharePrice: 18.98,
        createDate: '2024-05-14 01:01:01'
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    //await queryInterface.bulkDelete('Share', null, {});
  }
};