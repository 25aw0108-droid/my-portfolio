import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Scroll Top Button */}
      <button 
        className={`scroll-top ${showScroll ? 'show' : ''}`} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fa-solid fa-angles-up"></i>
      </button>

      {/* Mobile Menu Toggle */}
      <button 
        className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span><span></span><span></span>
      </button>

      {/* Sidebar */}
      <nav id="sidebar" className={menuOpen ? 'open' : ''}>
        <div className="nav-logo">
          <NavLink to="/"><img src="/images/myLogo.svg" alt="Name_logo" /></NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          <a href="/#contact">Contact</a>
        </div>
        <div className="nav-footer">
          <div className="avail">
            <div className="avail-dot"></div>
            Available for work
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer>
        © 2026 <strong>Khaing Khin Oo</strong>
      </footer>
    </>
  );
};

export default Layout;