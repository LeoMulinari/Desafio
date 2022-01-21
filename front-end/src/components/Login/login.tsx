import React from 'react';
import { Link } from 'react-router-dom';
import { CampoRequerido } from '../cadastro/campo';
import './estilo-login.css';

export function Login() {
  return (
    <div className="container">
      <form className="form-box">
        <div>
          <h1>Login</h1>
        </div>
        <CampoRequerido label="Email: " name="email" type="email" />
        <CampoRequerido label="Senha: " name="senha" type="password" />
        <div className="div-link">
          <Link className="botao-entrar" to="/homepage">
            Entrar
          </Link>
        </div>
        <div>
          <Link className="link-to" to="/cadastro">
            Crie sua conta
          </Link>
        </div>
        <Link to="/">Esqueceu sua senha?</Link>
      </form>
    </div>
  );
}
