import './nav-menu.css';
import {NavLink} from 'react-router-dom';
import {AppRoute} from '../../const';

const NavMenu = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink 
            to={AppRoute.ROOT}
            className="nav__link"
          >Главная</NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={AppRoute.NEWS}
            className="nav__link"
          >Новости</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
