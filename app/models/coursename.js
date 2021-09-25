'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseName extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CourseName.init({
    name: DataTypes.STRING,
    letter: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CourseName',
  });
  return CourseName;
};