'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PortfolioDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      portfolioId: {
        type: Sequelize.INTEGER
      },
      shareId: {
        type: Sequelize.INTEGER
      },
      pricePaid: {
        type: Sequelize.DECIMAL(10, 2)
      },
      shareQuantity: {
        type: Sequelize.DECIMAL(10, 2)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PortfolioDetails');
  }
};