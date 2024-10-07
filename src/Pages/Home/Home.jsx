import React, {useContext}from 'react';
import CardPizza from '../../components/CardPizza/CardPizza'; // Ajusta la ruta según tu estructura de archivos
import Header from './Header';
import { PizzaContext } from '../../Context/pizzaContext';

const Home = ( ) => {
    const { pizzas } = useContext(PizzaContext);

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <div className="col-md-4" key={pizza.id}>
                            <CardPizza pizza={pizza}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Home;
