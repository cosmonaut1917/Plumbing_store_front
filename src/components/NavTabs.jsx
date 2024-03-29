import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    
    
    <ul className="nav nav-tabs justify-content-end bg-secondary.bg-gradient">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Company"
          className={currentPage === '/Company' ? 'nav-link active' : 'nav-link'}
        >
          Our Company
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Login"
          className={currentPage === '/Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Suppliers"
          className={currentPage === '/Suppliers' ? 'nav-link active' : 'nav-link'}
        >
          Suppliers
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
