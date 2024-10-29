const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Exercise = sequelize.define('Exercise', {
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    calories: {
      type: DataTypes.INTEGER
    },
    notes: {
      type: DataTypes.TEXT
    }
  });

  return Exercise;
};
