'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-purple-indigo shadow-md">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link href="/home" className="text-2xl font-bold flex items-center cursor-pointer">
            <span className="mr-2">💪</span> Fusion Gym
          </Link>
         
          {/* Mobile menu button */}
          <button
            className="mobile-menu-button md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
         
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/home"
              className={`font-medium transition ${
                pathname === '/home' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition ${
                pathname === '/about' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition ${
                pathname === '/contact' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>
       
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="mobile-menu open">
            <Link
              href="/home"
              onClick={() => setIsMenuOpen(false)}
              className={`block font-medium transition ${
                pathname === '/home' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block font-medium transition ${
                pathname === '/about' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block font-medium transition ${
                pathname === '/contact' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact Us
            </Link>
            <a
              className="btn btn-primary"
            >
              Get Started
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
