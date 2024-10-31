const { DataTypes } = require('sequelize');
require('dotenv').config();

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: process.env.USER_TABLE_NAME || 'users',
    schema: process.env.DB_SCHEMA,
    charset: process.env.DB_CHARSET || 'utf8',
    collate: process.env.DB_COLLATE || 'utf8_general_ci',
    timestamps: true,
    underscored: true,
    paranoid: true
  });

  // Add any hooks if needed
  User.beforeCreate(async (user) => {
    // Example: You could add password hashing here
    // user.password = await bcrypt.hash(user.password, 10);
  });

  // Add any class methods if needed
  User.associate = (models) => {
    // Define associations here
    // Example: User.hasMany(models.Post);
  };

  return User;
};
