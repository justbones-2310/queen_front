//import { Link } from "react-router-dom";
import '.././styles/layout.css';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

const Nav = (props) => {

  const toggleBtn = document.querySelector('.toggle_btn')
  const toggleBtnIcon = document.querySelector('.toggle_btn i')
  const dropDownMenu = document.querySelector('.dropdown_menu')

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
      ? 'bi bi-x-circle'
      : 'bi bi-text-center'
  }

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

        <div className="toggle_btn">
          <i class="bi bi-text-center"></i>
        </div>

        <div className="dropdown_menu open">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink></li>
          <li><NavLink to="/la banda de rock" className={({ isActive }) => isActive ? "activo" : undefined} >La Banda de Rock</NavLink></li>
          <li><NavLink to="/administrador" className={({ isActive }) => isActive ? "activo" : undefined} >Música</NavLink></li>
          <li><NavLink to="/live aid" className={({ isActive }) => isActive ? "activo" : undefined} >Live Aid</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined} >Contacto</NavLink></li>
        </div>

      </nav>
    </div>
  );
}

export default Nav;
