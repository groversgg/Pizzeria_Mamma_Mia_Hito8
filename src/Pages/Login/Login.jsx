import React, { useState, useContext } from 'react';
import '../Register/register.css';
import { UserContext } from '../../Context/userContext';

const Login = (props) => {
  const { login } = useContext(UserContext); // Obtener el método login del UserContext

  const handleEmailChange = (event) => {
    props.setEmail(event.target.value);
  }

  const handlePassword1Change = (event) => {
    props.setPassword1(event.target.value);
  }

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (props.password1.length < 6) {
      setMessage('El password debe tener al menos 6 caracteres');
      setIsSuccess(false);
      return;
    }

    try {
      // Intentamos hacer login utilizando el método del UserContext
      const loginSuccess = await login(props.email, props.password1);
      if (loginSuccess) {
        setMessage("Inicio de sesión exitoso");
        setIsSuccess(true);
      } else {
        setMessage("Credenciales incorrectas");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Error al iniciar sesión');
      setIsSuccess(false);
    }
  }

  return (
    <div className='contentform'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            name='email'
            value={props.email} 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            required
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            name='password1' 
            value={props.password1}
            id="exampleInputPassword1" 
            required 
            onChange={handlePassword1Change}
          />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        <br />
        <br />
        {/* Mostrar alerta si hay un mensaje */}
        {message && (
          <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`} role="alert">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
