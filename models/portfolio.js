'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.PortfolioDetail, { foreignKey: "portfolioId", onDelete: 'RESTRICT' });
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Portfolio.init({
    userId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Portfolio',
    //timestamps: false
  });
  return Portfolio;
};