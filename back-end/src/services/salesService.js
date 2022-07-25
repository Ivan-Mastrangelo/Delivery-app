const { sale: saleModel, user: userModel } = require('../database/models');

const sellerIdUnderscored = ['seller_id'];
const userIdUnderscored = ['user_id'];

const createSale = async (saleInfos, userId) => {
  const { totalPrice, sellerName, deliveryAddress, deliveryNumber, status } = saleInfos;
  const { id: sellerId } = await userModel.findOne({ where: { name: sellerName } });
<<<<<<< HEAD
  const saleDate = new Date();

  const params = {
    totalPrice,
    [userIdUnderscored]: userId,
    [sellerIdUnderscored]: sellerId,
=======
  const saleDate = createSaleDate();
  // wip - branch ivan para createSale e minha branch com aviso no update
  // const sellerIdUnderscored = ['seller_id'];

  const params = {
    totalPrice,
    userId,
    sellerId,
>>>>>>> b3380af62edceaced2e3dac9e4791d3c415ba1b9
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
  };

  const newSale = await saleModel.create(params);
  // const { id: saleId } = await saleModel.findOne({ where:  })
  return newSale;
};

const deleteSale = async (id) => saleModel.delete(id);

const getAllSales = async () => saleModel.findAll({
  include: { as: 'users', model: userModel, attributes: ['id'] },
});

const getAllSalesBySeller = async (id) => saleModel.findAll({
  where: { [sellerIdUnderscored]: id } });

const getAllSalesByUser = async (id) => saleModel.findAll({
  attributes: {
    exclude: ['deliveryAddress', 'deliveryNumber'] },
    where: { [userIdUnderscored]: id },
});

const getSaleById = async (id) => saleModel.findByPk(id);

const updateSale = async (id, status) => saleModel.update({ status }, { where: { id } }); // wip - retornar objeto sale com status atualizado

module.exports = {
  createSale,
  deleteSale,
  getAllSales,
  getAllSalesBySeller,
  getAllSalesByUser,
  getSaleById,
  updateSale,
};
