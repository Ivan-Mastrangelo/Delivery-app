const { DataTypes } = require('sequelize');

const attributes = {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const user = sequelize.define(
    'user',
    attributes,
    {
      timestamps: false
    }
  );

  user.associate = (models) => {
    user.hasMany(models.sale,
      { foreignKey: 'userId', as: 'sale' });
  };

  return user;
};
