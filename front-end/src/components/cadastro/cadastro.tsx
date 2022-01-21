import { Link } from 'react-router-dom';
import CampoEstado, { CampoRequerido, CampoSexo } from './campo';
import './estilo-cadastro.css';

export default function Cadastro() {
  return (
    <div className="container-cadastro">
      <h1 className="titulo-cadastro">Crie sua conta</h1>

      <form
        className="formBox"
        method="get"
        action="http://arquivo.devmedia.com.br/projeto/requisicao.php">
        <fieldset>
          <legend>Conta:</legend>
          <CampoRequerido label="Email: " name="email" type="email" />
          <CampoRequerido label="Senha: " name="senha" type="password" />
          <CampoRequerido label="Confirme sua senha: " name="confirme-senha" type="password" />
        </fieldset>

        <fieldset>
          <legend>Dados Pessoais:</legend>
          <CampoRequerido label="Nome Completo: " name="nome" type="text" />
          <CampoRequerido label="Telefone: " name="telefone" type="text" />
          <CampoRequerido label="CPF: " name="cpf " type="text" />
          <div className="campo-sexo">
            <label>Sexo: </label>
            <CampoSexo label="Masculino" name="sexo" type="radio" />
            <CampoSexo label="Feminino" name="sexo" type="radio" />
          </div>
          <CampoRequerido label="Data de nascimento: " name="data-nascimento" type="date" />
        </fieldset>

        <fieldset>
          <legend>Endereço: </legend>
          <CampoRequerido label="Rua: " name="rua" type="text" />
          <CampoRequerido label="Número: " name="numero" type="number" />
          <CampoRequerido label="Cidade: " name="cidade" type="text" />
          <CampoRequerido label="CEP: " name="cep" type="text" />
          <CampoEstado />
        </fieldset>

        <input className="submit-cadastro" type="submit" value="Cadastre-se!"></input>
      </form>
      <Link className="botao-voltar" to="/">
        Voltar
      </Link>
    </div>
  );
}
