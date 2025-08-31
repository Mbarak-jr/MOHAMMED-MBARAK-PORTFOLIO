// src/components/Layout/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl' : 'bg-gray-900/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              Mohammed Hassan 
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" text="Home" currentPath={location.pathname} />
            <NavLink to="/resume" text="Resume" currentPath={location.pathname} />
            <NavLink to="/projects" text="Projects" currentPath={location.pathname} />
            <NavLink to="/lab-challenges" text="Lab Challenges" currentPath={location.pathname} />
            <NavLink to="/contact" text="Contact" currentPath={location.pathname} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none transition duration-150 ease-in-out"
              aria-label="Main menu"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-gray-800/95 backdrop-blur-md px-2 pt-2 pb-4 space-y-1">
          <MobileNavLink to="/" text="Home" currentPath={location.pathname} onClick={toggleMenu} />
          <MobileNavLink to="/resume" text="Resume" currentPath={location.pathname} onClick={toggleMenu} />
          <MobileNavLink to="/projects" text="Projects" currentPath={location.pathname} onClick={toggleMenu} />
          <MobileNavLink to="/lab-challenges" text="Lab Challenges" currentPath={location.pathname} onClick={toggleMenu} />
          <MobileNavLink to="/contact" text="Contact" currentPath={location.pathname} onClick={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ to, text, currentPath }) => {
  const isActive = currentPath === to;
  
  return (
    <Link
      to={to}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative group ${
        isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
      }`}
    >
      {text}
      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
    </Link>
  );
};

// Reusable MobileNavLink component
const MobileNavLink = ({ to, text, currentPath, onClick }) => {
  const isActive = currentPath === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
        isActive 
          ? 'bg-gray-700/50 text-cyan-400' 
          : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'
      }`}
    >
      {text}
    </Link>
  );
};

export default Navbar;