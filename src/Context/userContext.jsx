import React, { createContext, useState } from 'react';
import axios from 'axios';

// Crear el contexto
export const UserContext = createContext();

// Crear el proveedor del contexto
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Almacena el token
  const [email, setEmail] = useState(null); // Almacena el email
  const [profile, setProfile] = useState(null); // Almacena el perfil del usuario
  const [error, setError] = useState(null); // Almacena errores si los hay

  // Método para hacer login
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      setToken(response.data.token); // Guarda el token recibido
      setEmail(response.data.email); // Guarda el email recibido
      setError(null); // Limpia cualquier error
    } catch (err) {
      setError(err.response?.data?.message || 'Error de autenticación');
    }
  };

  // Método para hacer registro
  const register = async (email, password1, password2) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password1,
        password2,
      });
      setToken(response.data.token); // Guarda el token recibido
      setEmail(response.data.email); // Guarda el email recibido
      setError(null); // Limpia cualquier error
    } catch (err) {
      setError(err.response?.data?.message || 'Error en el registro');
    }
  };

  // Método para obtener el perfil del usuario autenticado
  const getUserProfile = async () => {
    if (!token) {
      setError('No hay token disponible');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`, // Pasar el token en el encabezado de la petición
        },
      });
      setProfile(response.data); // Guarda la información del perfil
      setError(null); // Limpia cualquier error
    } catch (err) {
      setError(err.response?.data?.message || 'Error al obtener el perfil');
    }
  };

  // Método logout que elimina el token y el email del estado
  const logout = () => {
    setToken(null);  // Eliminar el token
    setEmail(null);  // Eliminar el email
    setProfile(null); // Eliminar el perfil del usuario
    setError(null);  // Limpiar cualquier error anterior
  };

  return (
    <UserContext.Provider value={{ token, email, profile, error, login, register, getUserProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
};
