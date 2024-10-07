import React, { createContext, useState, useEffect } from 'react';


// Crear el contexto
export const PizzaContext = createContext();

// Crear el proveedor del contexto
export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  // Función para obtener las pizzas desde el API
  const fetchPizzas = async () => {
    try {
      const result = await fetch("http://localhost:5000/api/pizzas");
      const data = await result.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  // Usar useEffect para llamar a fetchPizzas cuando el componente se monta
  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};
