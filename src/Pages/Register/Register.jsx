import React, { useState } from 'react';
import '../Register/register.css';

const Register = (props) => {

  const handleEmailChanhge = (event) => {
    props.setEmail(event.target.value);
  }

  const handlePassword1Chanhge = (event) => {
    props.setPassword1(event.target.value);
  }

  const handlePassword2Chanhge = (event) => {
    props.setPassword2(event.target.value);
  }

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Nuevo estado para verificar si el registro es exitoso

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.password1.length < 6) {
      setMessage('El password debe tener al menos 6 caracteres');
      setIsSuccess(false); // Indicar que no fue exitoso
      return;
    }

    if (props.password1 !== props.password2) {
      setMessage('El password y la confirmación del password deben ser iguales');
      setIsSuccess(false); // Indicar que no fue exitoso
      return;
    }

    // Aquí agregarías la lógica para registrar al usuario
    // Por ahora simulamos que fue exitoso
    setMessage("Registro exitoso");
    setIsSuccess(true); // Indicar que fue exitoso
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
            onChange={handleEmailChanhge}
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
            onChange={handlePassword1Chanhge}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Validate Password</label>
          <input 
            type="password" 
            className="form-control" 
            name='password2' 
            value={props.password2}
            id="exampleInputPassword2" 
            required
            onChange={handlePassword2Chanhge}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Validar</button>
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

export default Register;
