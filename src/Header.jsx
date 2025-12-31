import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">My Shop</div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <AddToCart />
    </header>
  );
};

export default Header;
