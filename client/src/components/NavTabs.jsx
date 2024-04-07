import { Link, useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'
import '../styles/style.css'
// import AuthService from '../utils/auth'
import { useAuth } from '../utils/authContext'



function NavTabs() {
  const { loggedIn, isAdmin } = useAuth()
  const currentPage = useLocation().pathname;


  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-bar nav-bar-active' : 'nav-bar'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Company"
          className={currentPage === '/Company' ? 'nav-bar nav-bar-active' : 'nav-bar'}
        >
          Our Company
        </Link>
      </li>
      
      <li className="nav-item">
        <Link
          to="/Suppliers"
          className={currentPage === '/Suppliers' ? 'nav-bar nav-bar-active' : 'nav-bar'}
        >
          Suppliers
        </Link>
      </li>
      
      {loggedIn && (
      <li className="nav-item">
        <Link
          to="/Store"
          className={currentPage === '/Store' ? 'nav-bar nav-bar-active' : 'nav-bar'}
        >
          Store
        </Link>
      </li>
      )}

    {/* {isAdmin && (
      <li className="nav-item">
        <Link
          to="/Users"
          className={currentPage === '/Users' ? 'nav-bar nav-bar-active' : 'nav-bar'}
        >
          Admin
        </Link>
      </li>

      )} */}

      <li className="nav-item">
        <Link
          to="/Login"
          className={currentPage === '/Login' ? 'nav-bar nav-bar-active' : 'nav-bar'}
        >
          {loggedIn ? `Logout` : "Login"}
        </Link>
      </li>

    </ul>
  );
}

export default NavTabs;