import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import ProductCartCard from './ProductCartCard';

const sellerTest = 'customer_order_details__element-order-details-label-seller-name';
const pedidoIdTest = 'customer_order_details__element-order-details-label-order-id';
const dataTest = 'customer_order_details__element-order-details-label-order-date';
const statusTest = 'customer_order_details__element-order-details-label-delivery-status';
const deliveryTest = 'customer_order_details__button-delivery-check';

function DetailsOrder({
  sale,
  callBack,
}) {
  return (
    <label htmlFor="tabela">
      Detalhe do Pedido
      <table name="tabela">
        <thead>
          <th data-testid={ pedidoIdTest }>
            { `PEDIDO ${sale.id}`}
          </th>
          {
            seller ? <th data-testid={ sellerTest }>{ sale.sellerName }</th> : null
          }
          <th data-testid={ dataTest }>{ data }</th>
          <th data-testid={ statusTest }>{ sale.saleDate }</th>
          {
            seller ? (
              <th>
                <Button
                  name="MARCAR COMO ENTREGUE"
                  dataTestId={ deliveryTest }
                  importanceClass="primary"
                  disabled="false"
                  callBack={ callBack }
                />
              </th>
            ) : null
          }
          <Button
            name="PREPARAR PEDIDO"
            dataTestId={ deliveryTest }
            importanceClass="primary"
            disabled="false"
            callBack={ callBack }
          />
          <Button
            name="SAIU PARA ENTREGA"
            dataTestId={ deliveryTest }
            importanceClass="primary"
            disabled="false"
            callBack={ callBack }
          />
        </thead>
        <thead>
          <th>item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitario</th>
          <th>SubTotal</th>
        </thead>
        <tbody>
          {
            sale.products.map((product, index) => (
              <ProductCartCard
                name={ product.name }
                key={ product.name }
                price={ product.price }
                quantity={ product.quantity }
                index={ index }
              />
            ))
          }
        </tbody>
        <h1
          data-testid="seller_order_details__element-order-total-price"
          className="primary"
        >
          {`Total: R$ ${sale.totalPrice}`}
        </h1>
      </table>
    </label>
  );
}

export default DetailsOrder;

DetailsOrder.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sellerName: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    orderIndex: PropTypes.number.isRequired,
    products: PropTypes,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  callBack: PropTypes.func.isRequired,
};
