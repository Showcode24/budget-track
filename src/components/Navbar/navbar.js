import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  // Define isAuthenticated state and setIsAuthenticated function
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Define onLogout function
  const handleLogout = () => {
    // Your logout logic here, e.g., clearing user session
    setIsAuthenticated(false);
  };

  return (
    <div className='navbar'>
      <div className='header'>
      <Link to="/"><img src='/bugtra.png' alt='logo' /></Link>
      <ul className='nav-link'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/budgets">Budgets</Link></li>
        <li><Link to="/goals">Goals</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
      <div>
      {isAuthenticated ? (
          <ul className='nav-link'>
          <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        ) : (
          <ul className='authentic'>
            <li><Link to="/signin">Log in</Link></li>
            <li className='get-started'><Link to="/signup">Get started <BsArrowRight /></Link></li>
          </ul>
        )}
      </div>

      
    </div>
  );
};

export default Navbar;
