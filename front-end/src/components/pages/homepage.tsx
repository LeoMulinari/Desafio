/* eslint-disable react/jsx-key */
import axios from 'axios';
import React from 'react';
import ConfirmeButton from '../botao/button';
import { Card } from '../card/card';
import Navbar from '../navbar/navbar';
import Pagination from '../pagination/pagination';
import './estilo-homepage.css';

interface CardResponse {
  author: string;
  content: string;
  date: string;
  imageUrl: string;
  readMoreUrl: string;
  time: string;
  title: string;
  url: string;
}

interface CardsData {
  category: string;
  cards: CardResponse[];
}

export default class Homepage extends React.Component {
  state: CardsData = { category: 'all', cards: [] };
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get(`https://inshortsapi.vercel.app/news?category=all`).then((res) => {
      const data = res.data;
      const category = data.category;
      const cards: CardResponse[] = data.data;
      this.setState({ category, cards });
    });
  }
  handleSubmit(event: any) {
    event.preventDefault();
    axios.get(`https://inshortsapi.vercel.app/news?category=${this.state.category}`).then((res) => {
      const data = res.data;
      const cards: CardResponse[] = data.data;
      this.setState({ ...this.state, cards });
    });
  }

  handleChange(event: any) {
    event.preventDefault();
    this.setState({ ...this.state, category: event.target.value });
  }

  render() {
    return (
      <div className="container-homepage">
        <Navbar />
        <main className="main">
          <form onSubmit={this.handleSubmit}>
            <div className="categorias">
              <label>Categorias: </label>
              <select name="category" value={this.state.category} onChange={this.handleChange}>
                <option value="all">Todas</option>
                <option value="national">Notícias Índia</option>
                <option value="business">Negócios</option>
                <option value="sports">Esportes</option>
                <option value="world">Mundo</option>
                <option value="politics">Política</option>
                <option value="technology">Tecnologia</option>
                <option value="startup">StartUp</option>
                <option value="entertainment">Entretenimento</option>
                <option value="miscellaneous">Diversos</option>
                <option value="hatke">Hatke</option>
                <option value="science">Ciência</option>
                <option value="automobile">Automóveis</option>
              </select>
              <ConfirmeButton label="Confirmar" />
            </div>
          </form>

          <div className="container-cards">
            {this.state.cards.map((cards, index) => (
              // eslint-disable-next-line react/jsx-key
              <div className="contained-cell">
                <Card
                  key={index}
                  title={cards.title}
                  img={cards.imageUrl}
                  newsurl={cards.readMoreUrl}
                  content={cards.content}
                />
              </div>
            ))}
          </div>

          <Pagination />
        </main>
      </div>
    );
  }
}
