import { NavLink } from "react-router-dom";
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="contenedor">
      <nav className="navegacion">
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/sobremi" activeClassName="active">Sobre mi</NavLink>
          </li>
          <li>
            <NavLink to="/proyectos" activeClassName="active">Proyectos</NavLink>
          </li>
          <li>
            <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;