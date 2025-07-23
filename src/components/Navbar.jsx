import { useState } from "react";
import { NavLink } from "react-router";
import logo from "./../assets/logo.png";

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const root=document.querySelector('#root')
  const body=document.querySelector("body")

  function toggleTheme() {
    setIsDark(!isDark);
    root.classList.toggle('dark');
    body.classList.toggle('bg-black')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="px-5 lg:px-20 md:px-10 bg-white dark:bg-black fixed z-50 top-0 start-0 end-0 shadow-sm dark:border-#101828">
      <div className="flex flex-wrap items-center justify-between py-1">
        <NavLink
          to="/"
          className="flex justify-center items-center space-x-3 "
          aria-label="Go to Pizza Hut homepage"
          onClick={toggleMenu}
        >
          <img src={logo} className="w-14" alt="Pizza Hut Logo" />
          <span className="text-black font-oleo text-2xl font-semibold whitespace-nowrap dark:text-white">
            Pizza Hut
          </span>
        </NavLink>

        <div className="flex items-center">
          {/* Theme toggle button for small screens */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-sm"
            type="button"
            className="bg-gray-800 dark:bg-gray-100 focus:outline-none rounded-full w-16 p-1 md:hidden"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
          >
            <div
              className={`relative w-6 h-6 transition-transform duration-300 ease-in-out ${
                isDark ? "translate-x-8" : "translate-x-0"
              }`}
            >
              {isDark ? (
                <svg
                  id="theme-toggle-light-icon"
                  className="bg-red-600 w-6 h-6 rounded-full p-1 text-lg text-white absolute"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  id="theme-toggle-dark-icon"
                  className="bg-red-600 w-6 h-6 rounded-full p-1 text-lg text-white absolute"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </div>
          </button>

          {/* Menu toggle button for small screens */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle navigation menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full md:flex md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  dark:bg-black md:dark:bg-black dark:border-black">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 dark:text-white ${
                    isActive
                      ? "bg-red-600 md:bg-transparent md:text-red-600 md:dark:text-red-500"
                      : "text-gray-900 md:hover:text-red-600 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-red-500"
                  }`
                }
                aria-current="page"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 dark:text-white ${
                    isActive
                      ? "bg-red-600 md:bg-transparent md:text-red-600 md:dark:text-red-500"
                      : "text-gray-900 md:hover:text-red-600 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-red-500"
                  }`
                }
                onClick={toggleMenu}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 dark:text-white ${
                    isActive
                      ? "bg-red-600 md:bg-transparent md:text-red-600 md:dark:text-red-500"
                      : "text-gray-900 md:hover:text-red-600 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-red-500"
                  }`
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 dark:text-white ${
                    isActive
                      ? "bg-red-600 md:bg-transparent md:text-red-600 md:dark:text-red-500"
                      : "text-gray-900 md:hover:text-red-600 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-red-500"
                  }`
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* Theme toggle button for medium screens and above */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-md"
            type="button"
            className="hidden md:flex bg-gray-800 dark:bg-gray-100 focus:outline-none rounded-full w-16 p-1 ml-4 items-center"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
          >
            <div
              className={`relative w-6 h-6 transition-transform duration-300 ease-in-out ${
                isDark ? "translate-x-8" : "translate-x-0"
              }`}
            >
              {isDark ? (
                <svg
                  id="theme-toggle-light-icon"
                  className="bg-red-600 w-6 h-6 rounded-full p-1 text-lg text-white absolute"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  id="theme-toggle-dark-icon"
                  className="bg-red-600 w-6 h-6 rounded-full p-1 text-lg text-white absolute"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;