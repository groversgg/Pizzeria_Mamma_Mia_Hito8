import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext';
import { PizzaContext } from '../../Context/pizzaContext'; // Importa el contexto de las pizzas

const Pizza = () => {
  const { id } = useParams();
  const { agregarProducto } = useContext(CartContext);
  const { pizzas } = useContext(PizzaContext); // Obtén las pizzas desde el contexto

  // Busca la pizza seleccionada usando el id de los params
  const pizza = pizzas.find(p => p.id === id);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div className="card">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h4 className="card-title">{pizza.name}</h4>
        <hr />
        <p className="card-text">
          <strong>Ingredientes:</strong>
        </p>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <hr />
        <p className="card-text text-center">
          <strong>Descripción:</strong> {pizza.desc}
        </p>
        <hr />
        <p className="card-text">
          <strong>Precio: $ {pizza.price}</strong>
        </p>
        <button className="btn btn-outline-success" onClick={() => agregarProducto(pizza)}>
          <i className="fa-solid fa-cart-shopping"></i> Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Pizza;
