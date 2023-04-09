import { useState } from 'react';
import { Link } from 'react-router-dom';

function BurgerMenu() {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = ['SHOP', 'GAMES', 'METAVERSE'];

  return (
    <>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className={showSidebar ? 'menu-btn active' : 'menu-btn'}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {showSidebar && (
        <ul
          className="menu__adaptive"
          close={() => setShowSidebar(!showSidebar)}
        >
          {links.map((link, index) => (
            <li className="menu__list">
              <Link to="#" className="menu__link" key={index}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default BurgerMenu;
