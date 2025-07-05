// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  'Home',
  'About',
  'Acceptance',
  'College',
  'Contact',
  'News',
  'Partners',
  'Service',
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4sQVakMFNnRIsNLKXd2Jk3Bje2r2oBDS5w&s"
            alt="Logo"
            className="h-10 w-auto mr-4"
          />
          <span className="text-2xl font-bold text-gray-800">MyBrand</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden gap-5 md:flex items-center space-x-4">
          {NAV_ITEMS.map((item) => {
            const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = currentPath === href;
            return (
              <li key={item}>
                <Link
                  to={href}
                  className={`
                    relative px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wide transition
                    ${isActive
                      ? 'text-orange-600 after:absolute after:-bottom-1 after:left-1/4 after:w-1/2 after:h-0.5 after:bg-orange-600'
                      : 'text-gray-700 hover:bg-orange-100 hover:text-orange-600'}
                  `}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Language Selector */}
        <div className="hidden md:flex items-center space-x-2">
          <span className="text-gray-500 text-sm">Lang:</span>
          <select
            className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium
                       focus:outline-none focus:ring-2 focus:ring-orange-200
                       hover:border-orange-400 transition"
          >
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          md:hidden overflow-hidden bg-white shadow-lg
          transition-[max-height] duration-300 ease-out
          ${isOpen ? 'max-h-screen' : 'max-h-0'}
        `}
      >
        <ul className="flex flex-col items-center py-4 space-y-3">
          {NAV_ITEMS.map((item) => {
            const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = currentPath === href;
            return (
              <li key={item} className="w-full text-center">
                <Link
                  to={href}
                  className={`
                    block w-full px-4 py-2 text-gray-700 font-medium uppercase tracking-wide text-base
                    hover:bg-orange-100 hover:text-orange-600 transition rounded-lg
                    ${isActive ? 'text-orange-600' : ''}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            );
          })}

          <li className="w-full text-center">
            <select
              className="w-3/4 border border-gray-300 rounded-md px-3 py-2 text-sm font-medium
                         focus:outline-none focus:ring-2 focus:ring-orange-200
                         hover:border-orange-400 transition"
              onChange={() => setIsOpen(false)}
            >
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
