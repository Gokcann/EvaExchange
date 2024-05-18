'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PortfolioDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Portfolio, { foreignKey: "portfolioId" });
      this.belongsTo(models.Share, { foreignKey: "shareId" });
    }
  }
  PortfolioDetail.init({
    portfolioId: DataTypes.NUMBER,
    shareId: DataTypes.NUMBER,
    pricePaid: DataTypes.DECIMAL(10,2),
    shareQuantity: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'PortfolioDetail',
    timestamps: false
  });
  return PortfolioDetail;
};