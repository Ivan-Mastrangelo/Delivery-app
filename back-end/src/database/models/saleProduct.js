const SaleProduct = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define("saleProduct", {
    quantity: DataTypes.NUMBER
  },
    {
      modelName: "saleProduct",
      tableName: "salesProducts",
      timestamps: false,
      underscored: true,
    }
  );

  SaleProduct.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });

    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
  }

  return SaleProduct;
};

module.exports = SaleProduct;