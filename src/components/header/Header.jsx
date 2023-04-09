import { Link } from 'react-router-dom';
import BurgerMenu from '../burger/BurgerMenu';

function Header() {
  const links = ['SHOP', 'GAMES', 'METAVERSE'];

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <BurgerMenu />
          <ul className="menu">
            {links.map((link, index) => (
              <li className="menu__list">
                <Link to="#" className="menu__link" key={index}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="#" className="logo">
            <img src="images/logo.svg" alt="basket" />
          </Link>

          <Link to="#" className="basket basket--on">
            <img src="images/basket.svg" alt="basket" />
            <span>1</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
