import { Link } from 'react-router-dom';

function Footer() {
  const links = ['SHOP', 'GAMES', 'METAVERSE', 'CONTACT US'];
  return (
    <footer className="footer">
      <div className="container">
        <nav className="nav">
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
            <img src="images/logo.svg" alt="logo" />
          </Link>
          <ul className="social">
            <li className="social__item">
              <Link to="#" className="social__link">
                <img className='social__img' src="images/youtube.svg" alt="you tube" />
              </Link>
            </li>
            <li className="social__item">
              <Link to="#" className="social__link">
                <img className='social__img' src="images/facebook.svg" alt="facebook" />
              </Link>
            </li>
            <li className="social__item">
              <Link to="#" className="social__link">
                <img className='social__img' src="images/insta.svg" alt="instagram" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
