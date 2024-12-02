import React, { useState } from 'react';
import './Login.css'; // Arquivo de estilos CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log('Login enviado:', { email, senha });
  };

  const handleRegister = () => {
    // Redirecionar ou abrir tela de registro
    console.log('Redirecionando para registro...');
  };

  const handleRecoverPassword = () => {
    // Lógica para recuperação de senha
    console.log('Redirecionando para recuperação de senha...');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="logo.png" alt="Logo Eu Fiscalizo" className="logo" />
        <h2>Login - Eu Fiscalizo</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="links">
          <button onClick={handleRegister} className="register-btn">
            Registrar-se
          </button>
          <button onClick={handleRecoverPassword} className="recover-btn">
            Esqueci minha senha
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
