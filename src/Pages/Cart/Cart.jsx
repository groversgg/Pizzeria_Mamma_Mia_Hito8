import React, { useContext } from 'react';
import axios from 'axios'; // Importamos axios
import { CartContext } from '../../Context/cartContext';
import { formatNumber } from '../../assets/js/utils';
import './cart.css';
import { PizzaContext } from '../../Context/pizzaContext';
import { UserContext } from '../../Context/userContext';

const Cart = () => {
  const { carrito, agregarProducto, disminuirProducto, obtenerCantidadTotal, obtenerTotalPagar } = useContext(CartContext);
  const { pizzas } = useContext(PizzaContext);
  const { token } = useContext(UserContext); // Extraer el token del UserContext

  // Función para enviar el carrito al backend
  const handleCheckout = async () => {
    if (!token) {
      alert('Debes iniciar sesión para realizar el pedido');
      return;
    }

    const checkoutData = {
      productos: carrito,
      total: obtenerTotalPagar(),
    };

    try {
      const response = await axios.post('http://localhost:5000/api/checkouts', checkoutData, {
        headers: {
          Authorization: `Bearer ${token}`, // Enviar el token en la cabecera si es necesario
        },
      });
      alert('Pedido realizado con éxito');
      console.log(response.data);
    } catch (error) {
      console.error('Error al realizar el pedido:', error);
      alert('Hubo un problema al realizar el pedido');
    }
  };

  return (
    <div>
      <h2>Detalles del Pedido</h2>
      <h3>Cantidad de Productos: {obtenerCantidadTotal()}</h3>
      <div className='d-flex align-items-center'>
        <h3>Total a Pagar: $ {formatNumber(obtenerTotalPagar())}</h3>
        <button className='btn btn-success m-2' disabled={!token} onClick={handleCheckout}>
          Pagar
        </button>
      </div>

      <div className='p3'>
        {pizzas.map((producto) => (
          <div className='d-flex align-items-center' key={producto.id}>
            <div className='titulo'>
              <img src={producto.img} alt={producto.name} />
            </div>
            <div className='descripcion'>
              <p><strong>{producto.name}</strong></p>
              <p>Precio: <strong>${formatNumber(producto.price)}</strong></p>
              <p>Cantidad: {carrito.find(item => item.id === producto.id)?.count || 0}</p>
            </div>

            <div className='botones'>
              <button className='btn btn-success m-2' onClick={() => agregarProducto(producto)}>+</button>
              <button className='btn btn-danger m-2' onClick={() => disminuirProducto(producto)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
