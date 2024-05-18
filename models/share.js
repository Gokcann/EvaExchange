'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Share extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.PortfolioDetail, { foreignKey: "shareId", onDelete: 'RESTRICT' });
    }
  }
  Share.init({
    shareSymbol: DataTypes.STRING,
    sharePrice: DataTypes.DECIMAL(10,2),
    createDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Share',
    timestamps: false,
    freezeTableName: true
  });
  return Share;
};