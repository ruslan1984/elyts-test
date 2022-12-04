import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => (
  <header className="header">
    <Link className="menuItem" to="/">
      На главную
    </Link>
    <Link className="menuItem" to="/news">
      Новости 
    </Link>
  </header>
);
export default Header;
