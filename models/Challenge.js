const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Challenge = sequelize.define('Challenge', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    goalType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    targetValue: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Challenge;
};
