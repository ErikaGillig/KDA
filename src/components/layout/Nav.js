import "../../styles/components/layout/Nav.css";

import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <nav>
      <div className="holder">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/historia"> Historia </Link>
          </li>
          <li>
            <Link to="/novedades"> Novedades </Link>
          </li>
          <li>
            <Link to="/miembros"> Miembros </Link>
          </li>
          <li>
            <Link to="/galeria"> Galeria </Link>
          </li>
          <li>
            <Link to="/contacto"> Registrate </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;