import { Link } from "react-router-dom";
import Logo from "../images/janos-logo.png";
import { links } from "../data";
import "./navbar.css";

const Navbar = () => {

  return (
    <>
      <nav>
        <div className="container nav__container">
          <Link to="/" className="nav__logo">
            <img className="logoimg" src={Logo} alt="Logo" />
          </Link>
          <ul className="nav__menu">
            {links.map(item => (
              <li key={item.id}>
                <a className="btn-light" href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
