import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ProductCartCard({ name, price, quantity, remove, index }) {
  const nameDatatest = `customer_checkout__element-order-table-name-${index}`;
  const quantityDatatest = `customer_checkout__element-order-table-quantity-${index}`;
  const priceDatatest = `customer_checkout__element-order-table-unit-price-${index}`;
  const subtotalDatatest = `customer_checkout__element-order-table-subtotal-${index}`;
  const rmDatatest = `customer_checkout__element-order-table-remove-${index}`;
  return (
    <tr>
      <td className="secundary">{ index }</td>
      <td data-testid={ nameDatatest }>
        {
          name
        }
      </td>
      <td data-testid={ quantityDatatest }>
        {
          quantity
        }
      </td>
      <td data-testid={ priceDatatest }>
        {
          `R$${price}`
        }
      </td>
      <td data-testid={ subtotalDatatest }>
        {
          `R$${price * quantity}`
        }
      </td>
      {
        remove ? (
          <td>
            <Button
              name="Remover"
              dataTestId={ rmDatatest }
              importanceClass="primary"
              callBack={ () => { console.log('remove'); } }
              disabled={ false }
            />
          </td>
        ) : null
      }
    </tr>
  );
}
export default ProductCartCard;

ProductCartCard.propTypes = {
  name: PropTypes.string.isRequired,
  remove: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};