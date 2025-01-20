import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-screen z-50 transition-all overflow-hidden duration-300 ${
        scrolled ? 'bg-dark-900/80 backdrop-blur-sm py-2' : 'py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              
              <span className="text-xl  font-bold text-orange-500 hidden sm:block">
                DW Innovation Pvt. Ltd
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Right aligned */}
          <div className="hidden lg:flex items-center  space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2.5 rounded-xl font-medium text-base transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'text-primary-400 bg-primary-400/10'
                    : 'text-dark-100 hover:text-primary-400 hover:bg-primary-400/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Right aligned */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-100 hover:text-primary-400 transition-colors duration-300 p-2 rounded-xl hover:bg-primary-400/5"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4">
            <div className="bg-dark-800/90 backdrop-blur-sm rounded-2xl p-3 space-y-1 shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block transition-colors duration-300 px-4 py-2.5 rounded-xl ${
                    isActivePath(item.path)
                      ? 'bg-primary-500/20 text-primary-400'
                      : 'text-dark-100 hover:bg-dark-800/50 hover:text-primary-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
