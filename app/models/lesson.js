'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Lesson.init({
    number: DataTypes.INTEGER,
    weekDay: DataTypes.INTEGER,
    week: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER,
    audienceId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lesson',
  });
  return Lesson;
};