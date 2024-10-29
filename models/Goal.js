const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Goal = sequelize.define('Goal', {
    targetExercises: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    targetDuration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Goal;
};
