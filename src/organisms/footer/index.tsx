import { Link } from "react-router-dom";
import "./styles.css";

const Footer = () => (
  <footer className="footer">
    <Link className="footerMenuItem" to="/">
      На главную
    </Link>
    <Link className="footerMenuItem" to="/news">
      Новости 
    </Link>
  </footer>
);
export default Footer;
