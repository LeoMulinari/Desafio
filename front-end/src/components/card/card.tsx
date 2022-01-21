import React from 'react';
import './estilo-card.css';
export const Card: React.FC<CardProps> = (props) => {
  const content = props.content;
  //   if (props.content.length > 50) {
  //     content = props.content.slice(0, 50);
  //     content.concat('...');
  //   }
  return (
    <div className="card">
      <img className="card-img-top" src={props.img} alt="Imagem de capa do card"></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{content}</p>
        <div className="link-card">
          <a href={props.newsurl} className="btn btn-primary">
            Visitar
          </a>

          <a href={props.saveroute} className="btn btn-primary">
            + Salvar
          </a>
        </div>
      </div>
    </div>
  );
};
export interface CardProps {
  title: string;
  img: string;
  newsurl: string;
  saveroute?: string;
  content: string;
}
