import {NavLink } from "react-router-dom";
import { routes } from '../../Routes/routes';
import logo from '../../logo.svg';
const Nav = () => {
  return (
    <nav>

      <img src={logo} alt="loguito de react" />

      <ul>

          {
          routes.map(({to,name}) => (
              <li key={to}>
              <NavLink 
                  to={to} 
                  className={({isActive}) => isActive ? 'nav-active' : ''}>
                  {name}
                  </NavLink>
              </li>
          ))
          }

      </ul>

    </nav>
  )
}

export default Nav