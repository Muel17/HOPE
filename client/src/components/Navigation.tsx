import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-background/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="cursor-hover text-2xl font-bold gradient-text">
              Portfolio
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`cursor-hover px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location === item.href
                      ? 'text-primary-400 text-glow'
                      : 'text-foreground-muted hover:text-primary-400'
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-hover inline-flex items-center justify-center p-2 rounded-md text-foreground-muted hover:text-primary-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg border border-primary-800/30 mt-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`cursor-hover block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      location === item.href
                        ? 'text-primary-400 text-glow'
                        : 'text-foreground-muted hover:text-primary-400'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};