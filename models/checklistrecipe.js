'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChecklistRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChecklistRecipe.belongsTo(models.Condition,{
        foreignKey: 'conditionID',
      })
    }
  }
  ChecklistRecipe.init({
    name: DataTypes.STRING,
    medicalCondition: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
    conditionID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ChecklistRecipe',
  });
  return ChecklistRecipe;
};