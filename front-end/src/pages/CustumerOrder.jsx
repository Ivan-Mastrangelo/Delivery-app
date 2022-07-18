import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import deliveryContext from '../context/deliveryContext';
import DetailsOrder from '../components/DetailsOrder';

function CustomerOrder({ history }) {
  const { ordersSelected } = useContext(deliveryContext);

  // obs: ESSA PAGINA SERA RENDERIZADA QUANDO A PESSOA USUARIA CONCLUIR UM PEDIDO NO CARRINHO, OU CLICAR EM UM PEDIDO
  // DA SUA LISTA DE PEDIDOS, ENTAO É PRECISO PASSAR PARA ESSA PAGINA O PEDIDO CORRETO A SER RENDERIZADO,
  // A LOGICA Q EU ESCOLHI AQUI, FOI SALVAR NO ESTADO GLOBAL O ULTIMO PEDIDO SELECIONADO, PARA ASSIM, QUANDO A GENTE ENTRAR
  // NA PAGINA DE DETAILS, SO RENDERIZAR ESSE PEDIDO SALVO GLOBALMENTE

  console.log(ordersSelected, history);

  return (
    <div className="order-page flex-column">
      <DetailsOrder
        name={ ordersSelected.seller }
        pedidos={ ordersSelected }
        data={ ordersSelected.date }
      />
    </div>
  );
}

export default CustomerOrder;

CustomerOrder.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
