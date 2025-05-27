import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext'; 
import './Navbar.css';
import logoDrixel from '../../assets/images/LOGO DRIXELSTORE 2025 gd.png';
import userblack from '../../assets/images/iconblack.png';

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid justify-content-center">

        {/* Imagen centrada que lleva a Home */}
        <Link to="/" className="navbar-home-logo mx-auto">
          <img src={logoDrixel} alt="Drixel Store Logo" className="navbar-logo" />
        </Link>

        {/* Contenedor derecho: login/cart/profile/logout */}
        <div className="d-flex align-items-center ms-auto">
          {token ? (
            <>
              <Link to="/profile" className="icon-button">
                <img src="/icons/profile.png" alt="Profile" className="icon-img" />
              </Link>
              <button onClick={logout} className="icon-button btn btn-link">
                <img src="/icons/logout.png" alt="Logout" className="icon-img" />
              </button>
            </>
          ) : (
            <Link to="/login" className="icon-button">
              <img src={userblack} alt="Login" className="icon-img" />
            </Link>
          )}
          <Link to="/cart" className="total-button nav-link">
            🛒 ${total.toLocaleString()}&nbsp;
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
