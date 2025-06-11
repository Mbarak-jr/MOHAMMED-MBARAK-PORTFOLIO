// src/components/Layout/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Mohammed Mbarak
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" text="Home" />
            <NavLink to="/resume" text="Resume" />
            <NavLink to="/projects" text="Projects" />
            <NavLink to="/lab-challenges" text="Lab Challenges" />
            <NavLink to="/contact" text="Contact" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none transition duration-150 ease-in-out"
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
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" text="Home" onClick={toggleMenu} />
            <MobileNavLink to="/resume" text="Resume" onClick={toggleMenu} />
            <MobileNavLink to="/projects" text="Projects" onClick={toggleMenu} />
            <MobileNavLink to="/lab-challenges" text="Lab Challenges" onClick={toggleMenu} />
            <MobileNavLink to="/contact" text="Contact" onClick={toggleMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ to, text }) => (
  <Link
    to={to}
    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
  >
    {text}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ to, text, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-600 transition-colors duration-300"
  >
    {text}
  </Link>
);

export default Navbar;