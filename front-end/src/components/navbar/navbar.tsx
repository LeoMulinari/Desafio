import { Link } from 'react-router-dom';
import './estilo-navbar.css';

export default function Navbar() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/news">
          Notícias Salvas
        </Link>
      </li>
      <li className="nav-item">
        <button className="nav-link">Perfil</button>
      </li>
      <li className="nav-item">
        <Link className="nav-link nav-logo" to="/homepage">
          <img src="./logo40.png" alt="" />
        </Link>
      </li>
    </ul>
  );
}
