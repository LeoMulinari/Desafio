import './estilo-pagination.css';
export default function Pagination() {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            Anterior
          </a>
        </li>

        <li className="page-item">
          <a className="page-link" href="#">
            Próximo
          </a>
        </li>
      </ul>
    </nav>
  );
}
