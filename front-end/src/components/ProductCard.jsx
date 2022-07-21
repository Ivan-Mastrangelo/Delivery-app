import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import deliveryContext from '../context/deliveryContext';

function ProductCard({ name, productId, price, imgSrc }) {
  const [quantity, setQuantity] = useState(0);
  const imgDatatest = `customer_products__img-card-bg-image-${productId}`;
  const priceDatatest = `customer_products__element-card-price-${productId}`;
  const nameDatatest = `customer_products__element-card-title-${productId}`;
  const menosDatatest = `customer_products__button-card-rm-item-${productId}`;
  const maisDatatest = `customer_products__button-card-add-item-${productId}`;
  const quantityDatatest = `customer_products__input-card-quantity-${productId}`;
  const {
    setCartProducts,
    cartProducts,
  } = useContext(deliveryContext);
  const priceParse = (priceToParse) => priceToParse.replace('.', ',');

  const updateCartProducts = () => {
    const obj = {
      name,
      price,
      productId,
      quantity,
    };
      // isso aqui basicamente cria um outro elemento no array, que representa o produto selecionado, sua quantidade, preço
      // id e nome, e esse filtro é pra nao deixar duplicatas, meio ganbiarra, se alguem pensar algum jeito melhor, fique a vontade
      // mas funciona perfeitamente mentira
    setCartProducts(
      [...cartProducts.filter((product) => product.name !== name), obj],
    );
  };

  const handleButtonClick = ({ target: { innerText } }) => {
    const aux = quantity;
    if (innerText === '-' && quantity > 0) {
      setQuantity(aux - 1);
    } else if (innerText === '+') {
      setQuantity(aux + 1);
    }

    updateCartProducts();
    console.log(quantity);
    console.log(cartProducts);
  };

  useEffect(() => {

  }, []);

  return (
    <div
      className="product-card flex-column"
    >
      <p data-testid={ priceDatatest } className="price">{ priceParse(price) }</p>
      <img
        width="40"
        src={ imgSrc }
        alt={ `product-${name}` }
        data-testid={ imgDatatest }
      />
      <p data-testid={ nameDatatest }>
        {
          name
        }
      </p>
      <div className="add-button-products flex-row">
        <Button
          name="-"
          callBack={ handleButtonClick }
          dataTestId={ menosDatatest }
          importanceClass="primary"
          disabled={ false }
        />
        <input
          data-testid={ quantityDatatest }
          defaultValue={ quantity }
        />
        <Button
          name="+"
          callBack={ handleButtonClick }
          dataTestId={ maisDatatest }
          importanceClass="primary"
          disabled={ false }
        />
      </div>
    </div>
  );
}
export default ProductCard;

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
};
