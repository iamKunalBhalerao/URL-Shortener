import React, { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import OverallButton from "./OverallButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const goto = (to) => {
    navigate({ to: to });
  };

  return (
    <nav className="fixed p-2 w-full font-[gilroy]">
      <div className="max-w-7xl mx-auto bg-white shadow rounded-xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-center gap-4">
            <Link to="/" className="flex items-center justify-center">
              <span className="text-zinc-600 font-light cursor-pointer text-shadow-neutral-400 text-2xl">
                SHORTIVE
              </span>
            </Link>
          </div>

          {/* Right side - Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {isAuthenticated ? (
              <>
                <p
                  onClick={() => {
                    goto("/dashboard");
                  }}
                  className="text-gray-600 cursor-pointer hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </p>
                <div className="relative ml-3">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">
                      {"username"}
                    </span>
                    <button
                      className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => goto("/logout")}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p
                  onClick={() => goto("/signin")}
                  className="text-gray-600 hover:text-gray-900  cursor-pointer px-3 py-2 rounded-md text-lg font-medium"
                >
                  Sign In
                </p>
                <OverallButton to={"/signup"} btnText={"Sing Up"} />
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {isAuthenticated ? (
              <>
                <p
                  onClick={() => goto("/dashboard")}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Dashboard
                </p>
                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="px-4 flex items-center">
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {"Kunal"}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <button
                      className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 cursor-pointer"
                      onClick={() => goto("/logout")}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p
                  onClick={() => goto("/signin")}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                >
                  Sign In
                </p>
                <p
                  onClick={() => goto("/signup")}
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
                >
                  Sign Up
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
