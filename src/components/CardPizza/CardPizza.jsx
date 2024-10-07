// CardPizza.jsx
import React from 'react';
import { formatNumber } from '../../assets/js/utils';
import './cardpizza.css'
import { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import { useNavigate } from 'react-router-dom'

const CardPizza = ({pizza}) => {
  const { agregarProducto } = useContext(CartContext)
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/pizza/${pizza.id}`);
  };

  return (
    <div className="card" >
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h4 className="card-title">
          {pizza.name}
        </h4>
        <hr />
        <p className="card-text">
          <strong>Ingredientes:</strong>
        </p>
        <ul>
          {pizza.ingredients.map((ingredient,index) =>(
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <hr/>
        <p className="card-text text-center">
          <strong>Descripcion:</strong>{pizza.desc}
        </p>
        <hr />
        <p className="card-text">
          <strong>Precio: ${formatNumber(pizza.price)}</strong>
        </p>
        <div className="mt-auto d-flex justify-content-around gap-2">
          <a href="#" className="btn btn-outline-success col-5" onClick={handleViewMore}>
            <i className="fa-solid fa-eye"></i> Ver mas
          </a>
          <a href="#" className="btn btn-outline-success col-5" onClick={()=>agregarProducto(pizza)}>
            <i className="fa-solid fa-cart-shopping"></i> Añadir
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;