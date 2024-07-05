import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo-png.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 navbar-custom">
      <Link to="/" className="navbar-brand p-0">
        <img src={logo} alt="Startup Logo" className="me-2" width="200" height="50" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link">Home</Link>
          <Link to="/about" className="nav-item nav-link">About us</Link>
          <Link to="/products" className="nav-item nav-link">Products and Services</Link>
          <Link to="/features" className="nav-item nav-link">Features</Link>
          <Link to="/team" className="nav-item nav-link">Team Members</Link>
          <Link to="/blogs" className="nav-item nav-link">Blogs</Link> {/* Added Blogs link here */}
          <Link to="/contact" className="nav-item nav-link">Contact</Link>
        </div>
        <Link to="/login" className="btn btn-success py-2 px-4 ms-3">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
