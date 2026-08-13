import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Portfolio', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Education', href: '/education' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 pt-6 px-6 md:px-12 flex items-center justify-between pointer-events-none"
    >
      {/* Left Logo */}
      <Link to="/" className="text-2xl font-bold font-sans tracking-wide cursor-none pointer-events-auto flex items-center gap-2">
        <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">ADITYA</span>
        <span className="text-neonPurple drop-shadow-[0_0_10px_rgba(138,43,226,0.8)]">/ DEV</span>
      </Link>

      {/* Right Nav Pill */}
      <div className="hidden md:flex items-center glass-panel px-8 py-3 pointer-events-auto rounded-full">
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-all duration-300 relative group cursor-none",
                    isActive ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-textMuted hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill-active"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-neonPurple shadow-[0_0_10px_rgba(138,43,226,1)] rounded-full"
                    />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-neonPurple/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-neonPurple focus:outline-none cursor-none pointer-events-auto bg-black/50 p-2 rounded-lg border border-neonPurple/30"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
        </svg>
      </button>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-6 right-6 glass-panel flex flex-col items-center py-4 md:hidden pointer-events-auto z-50">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "py-3 text-lg font-medium cursor-none w-full text-center transition-colors",
                  isActive ? "text-neonPurple" : "text-textPrimary hover:text-neonPurple"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </motion.nav>
  );
}
