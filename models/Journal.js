const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Journal = sequelize.define('Journal', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  return Journal;
};
