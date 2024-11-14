//import { Link } from "react-router-dom";
import '.././styles/layout.css';
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className='holder'>
      <nav>

        <NavLink to="/">
          <img src="../images/Logo-Queen (1).png" alt="Logo diseñado por Freddie Mercury"
            className="logo-de-la-banda" />
        </NavLink>

        <ul className="nav-menu">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink></li>
          <li><NavLink to="/la banda de rock" className={({ isActive }) => isActive ? "activo" : undefined} >La Banda de Rock</NavLink></li>
          <li><NavLink to="/musica" className={({ isActive }) => isActive ? "activo" : undefined} >Música</NavLink></li>
          <li><NavLink to="/live aid" className={({ isActive }) => isActive ? "activo" : undefined} >Live Aid</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined} >Contacto</NavLink></li>
        </ul>

      </nav>
    </div>
  );
}

export default Nav;
