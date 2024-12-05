//import { Link } from "react-router-dom";
import '.././styles/layout.css';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

const Nav = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <input type="checkbox" id="chk1" style={{ display: 'none' }}></input>
        <div>
          <NavLink to="/">
            <img src="../images/Logo-Queen (1).png" className="logo" alt="Logo diseñado por Freddie Mercury" />
          </NavLink>
        </div>
        <ul className="menu-items">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink></li>
          <li><NavLink to="/la banda de rock" className={({ isActive }) => isActive ? "activo" : undefined} >La Banda de Rock</NavLink></li>
          <li><NavLink to="/administrador" className={({ isActive }) => isActive ? "activo" : undefined} >Música</NavLink></li>
          <li><NavLink to="/live aid" className={({ isActive }) => isActive ? "activo" : undefined} >Live Aid</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined} >Contacto</NavLink></li>
        </ul>

        <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink></li>
          <li><NavLink to="/la banda de rock" className={({ isActive }) => isActive ? "activo" : undefined} >La Banda de Rock</NavLink></li>
          <li><NavLink to="/administrador" className={({ isActive }) => isActive ? "activo" : undefined} >Música</NavLink></li>
          <li><NavLink to="/live aid" className={({ isActive }) => isActive ? "activo" : undefined} >Live Aid</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined} >Contacto</NavLink></li>
        </div>

        <div className="toggle_btn" onClick={toggleMenu}>
          <i class="bi bi-text-center"></i>
        </div>

      </nav>
    </div>
  );
}

export default Nav;
