import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Diya Fashions
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart

          <span className="cart-count">
            {cartCount}
          </span>
        </Link>

        <span className="user-icon">
          👤
        </span>

      </div>

    </nav>
  );
}

export default Navbar;