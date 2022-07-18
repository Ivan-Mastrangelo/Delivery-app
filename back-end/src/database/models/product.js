const { DataTypes } = require('sequelize');

const attributes = {
  name: DataTypes.STRING,
  price: DataTypes.NUMBER,
  urlImg: { type: DataTypes.STRING, field: 'url_image' }
};

module.exports = (sequelize) => {
  const product = sequelize.define(
    'product',
    attributes,
    {
      timestamps: false,
    }
  );
  return product;
}
