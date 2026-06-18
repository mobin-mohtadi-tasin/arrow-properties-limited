
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MenuIcon, XIcon } from './icons';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const showHeaderLogo = !isHomePage || showLogo;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setShowLogo(scrollY > 110);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load to initialize correct state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = 'block py-2 px-3 rounded-lg font-medium transition-all duration-300 text-sm ';
    if (isActive) {
      return baseClasses + (isScrolled
        ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/10'
        : 'bg-white/20 text-white backdrop-blur-md border border-white/20');
    }
    return baseClasses + (isScrolled
      ? 'text-slate-600 hover:bg-slate-100 hover:text-brand-blue'
      : 'text-white/90 hover:bg-white/10 hover:text-white');
  };

  const navLinks = (
    <>
      <NavLink to="/" className={navLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
      <NavLink to="/about" className={navLinkClasses} onClick={() => setIsOpen(false)}>About Us</NavLink>
      <NavLink to="/projects" className={navLinkClasses} onClick={() => setIsOpen(false)}>Projects</NavLink>
      <NavLink to="/land" className={navLinkClasses} onClick={() => setIsOpen(false)}>Land Development</NavLink>
      <NavLink to="/rental" className={navLinkClasses} onClick={() => setIsOpen(false)}>Rental / Sales</NavLink>
      <NavLink to="/contact" className={navLinkClasses} onClick={() => setIsOpen(false)}>Contact Us</NavLink>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
        : 'bg-transparent py-5'
        }`}
      id="main-header"
    >
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center min-h-[48px] md:min-h-[64px]"
          >
            <AnimatePresence mode="popLayout">
              {showHeaderLogo && (
                <motion.div
                  key="header-logo"
                  layoutId="main-logo"
                  initial={isHomePage ? { opacity: 0, scale: 0.8, y: 12 } : { opacity: 1, scale: 1, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -12 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                >
                  <Logo isScrolled={isScrolled} className="h-12 md:h-16 w-auto" />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
              id="mobile-menu-toggle"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className={`md:hidden mt-4 space-y-1 rounded-xl p-4 transition-all duration-300 shadow-xl ${isScrolled ? 'bg-white text-slate-800' : 'bg-slate-900/95 backdrop-blur-lg text-white'
            }`}>
            {navLinks}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
