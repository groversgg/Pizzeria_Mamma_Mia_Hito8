import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar productos al carrito
  const agregarProducto = (producto) => {
    const coincidencia = carrito.findIndex(item => item.id === producto.id);
    if (coincidencia >= 0) {
      const carritoActualizado = [...carrito];
      carritoActualizado[coincidencia].count++;
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, { ...producto, count: 1 }]);
    }
  };

  // Función para disminuir productos del carrito
  const disminuirProducto = (producto) => {
    const coincidencia = carrito.findIndex(item => item.id === producto.id);
    if (coincidencia >= 0) {
      if (carrito[coincidencia].count > 1) {
        const carritoActualizado = [...carrito];
        carritoActualizado[coincidencia].count--;
        setCarrito(carritoActualizado);
      } else {
        setCarrito(carrito.filter(item => item.id !== producto.id));
      }
    }
  };

  // Función para calcular la cantidad total de productos
  const obtenerCantidadTotal = () => {
    return carrito.reduce((acc, item) => acc + item.count, 0);
  };

  // Función para calcular el total a pagar
  const obtenerTotalPagar = () => {
    return carrito.reduce((acc, item) => acc + item.count * item.price, 0);
  };

  // Proveedor de valores que el contexto ofrecerá
  return (
    <CartContext.Provider value={{
      carrito,
      agregarProducto,
      disminuirProducto,
      obtenerCantidadTotal,
      obtenerTotalPagar
    }}>
      {children}
    </CartContext.Provider>
  );
};
