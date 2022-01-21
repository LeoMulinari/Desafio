import React from 'react';
import './estilo-campo.css';
export const Campo: React.FC<CampoProps> = (props) => {
  return (
    <div className="label-float">
      <input className="inputfield" type={props.type} placeholder=" " value="" />
      <label className="input">{props.label}</label>
    </div>
  );
};

export const CampoRequerido: React.FC<CampoProps> = (props) => {
  return (
    <div className="label-float">
      <input className="inputfield" required type={props.type} placeholder=" " />
      <label className="input">{props.label}</label>
    </div>
  );
};
export const CampoSexo: React.FC<CampoProps> = (props) => {
  return (
    <div>
      <input type={props.type} name={props.name} placeholder=" " value="" />
      <label>{props.label}</label>
    </div>
  );
};

export default function CampoEstado() {
  return (
    <div className="campo-estado">
      <label>Estado: </label>
      <select name="estado">
        <option value="Acre">Acre</option>
        <option value="Alagoas">Alagoas</option>
        <option value="Amapá">Amapá</option>
        <option value="Amazonas">Amazonas</option>
        <option value="Bahia">Bahia</option>
        <option value="Ceará">Ceará</option>
        <option value="Distrito Federal">Distrito Federal</option>
        <option value="Espírito Santo">Espírito Santo</option>
        <option value="Goiás">Goiás</option>
        <option value="Maranhão">Maranhão</option>
        <option value="Mato Grosso">Mato Grosso</option>
        <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
        <option value="Minas Gerais">Minas Gerais</option>
        <option value="Pará">Pará</option>
        <option value="Paraíba">Paraíba</option>
        <option value="Paraná">Paraná</option>
        <option value="Pernambuco">Pernambuco</option>
        <option value="Piauí">Piauí</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="Rio Grande do Norte">Rio Grande do Norte</option>
        <option value="Rio Grande do Sul">Rio Grande do Sul</option>
        <option value="Rondônia">Rondônia</option>
        <option value="Roraima">Roraima</option>
        <option value="Santa Catarina">Santa Catarina</option>
        <option value="São Paulo">São Paulo</option>
        <option value="Sergipe">Sergipe</option>
        <option value="Tocantins">Tocantins</option>
      </select>
    </div>
  );
}

interface CampoProps {
  label: string;
  name: string;
  type: string;
}
