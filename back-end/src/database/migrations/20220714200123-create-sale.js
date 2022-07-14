module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      userId: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'user',
          key: 'id'
        },
        type: Sequelize.INTEGER,
      },

      sellerId: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'user',
          key: 'id'
        },
        type: Sequelize.INTEGER,
      },

      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
      },

      deliveryAddress: {
        type: Sequelize.STRING(100),
      },

      deliveryNumber: {
        type: Sequelize.STRING(50),
      },

      saleDate: {
        type: Sequelize.DATE,
      },

      status: {
        type: Sequelize.STRING(50),
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  }
};