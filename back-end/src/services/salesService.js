const createSaleDate = require('../helpers/createSaleDate');
const { sale: saleModel, user: userModel } = require('../database/models');

const createSale = async (saleInfos) => {
  const { totalPrice, sellerName, deliveryAddress, deliveryNumber, status } = saleInfos;
  const { id: sellerId } = await userModel.findOne({ where: { name: sellerName } });
  const saleDate = createSaleDate();

  const params = {
    totalPrice, sellerId, deliveryAddress, deliveryNumber, saleDate, status,
  };

  const newSale = await saleModel.create(params);
  // const { id: saleId } = await saleModel.findOne({ where:  })
  return newSale;
};

const deleteSale = async (id) => saleModel.delete(id);

const getAllSales = async () => saleModel.findAll({
  include: { as: 'users', model: userModel, attributes: ['id'] },
});

const getAllSalesBySeller = async (id) => saleModel.findAll({ where: { sellerId: id } });

const getAllSalesByUser = async (id) => saleModel.findAll({
  attributes: { exclude: ['deliveryAddress', 'deliveryNumber'] }, where: { userId: id },
});

const getSaleById = async (id) => saleModel.findByPk(id);

const updateSale = async (id, status) => saleModel.update({ status }, { where: { id } });

module.exports = {
  createSale,
  deleteSale,
  getAllSales,
  getAllSalesBySeller,
  getAllSalesByUser,
  getSaleById,
  updateSale,
};
