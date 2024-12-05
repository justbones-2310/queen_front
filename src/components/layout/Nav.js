//import { Link } from "react-router-dom";
import '.././styles/layout.css';
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <nav>
        <input type="checkbox" name="" id="chk1"></input>
        <div>
          <NavLink to="/">
            <img src="../images/Logo-Queen (1).png" className="logo" alt="Logo diseñado por Freddie Mercury" />
          </NavLink>
        </div>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink></li>
          <li><NavLink to="/la banda de rock" className={({ isActive }) => isActive ? "activo" : undefined} >La Banda de Rock</NavLink></li>
          <li><NavLink to="/administrador" className={({ isActive }) => isActive ? "activo" : undefined} >Música</NavLink></li>
          <li><NavLink to="/live aid" className={({ isActive }) => isActive ? "activo" : undefined} >Live Aid</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined} >Contacto</NavLink></li>
        </ul>

        <div className='menu'>
          <label for="chk1">
            <i className="bi bi-navbar"></i>
          </label>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
