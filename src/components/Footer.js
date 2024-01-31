import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../assets/logo.webp";
import { IoLogoInstagram, IoLogoPinterest } from "react-icons/io";

// Styles
import s from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`${s.Footer} d-flex flex-wrap justify-content-between align-items-center py-3 border-top`}
    >
      <div className="col-md-4 d-flex align-items-center">
        <Link
          to="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <img src={logo} alt="logo" height="25" />
        </Link>
        <span className={`mb-3 mb-md-0 text-muted`}>
          &copy; <span className={s.FooterFont}>KSL Design</span>
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <Link
            className="text-muted mx-2"
            to={{ pathname: "https://www.instagram.com/" }}
            target="_blank"
          >
            <IoLogoInstagram size={22} className={s.Icon} />
          </Link>
        </li>
        <li className="ms-3">
          <Link
            className="text-muted mx-2"
            to={{ pathname: "https://www.pinterest.co.uk/" }}
            target="_blank"
          >
            <IoLogoPinterest size={22} className={s.Icon} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
