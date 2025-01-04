"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = [
    "/",
    "/generate",
    "/templates",
    "/discover",
    "/marketplace",
    "/pricing",
    "/learn",
  ].includes(pathname);

  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const profileImage = e.target.profileImage.files[0]
      ? URL.createObjectURL(e.target.profileImage.files[0])
      : "https://via.placeholder.com/40"; // Default profile image

    console.log({ username, email, password, profileImage });
    setUser({ name: username, profileImage });
    setShowLogin(false);
    setShowSignup(false);
    setIsMenuOpen(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    console.log({ username, email, password, name });
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleLogout = () => setUser(null);

  return (
    <>
      {showNavbar && (
        <nav
          className={`bg-white w-[90vw] flex justify-between items-center fixed top-6 right-[5vw] rounded-full p-4 px-7 py-6 z-20 transition-shadow duration-300 ${
            isScrolled ? "shadow-lg" : ""
          }`}
        >
          <div className="logo flex items-center gap-5 sm:gap-20">
            <Link href={"/"}>
              <img
                src="/Linktree.png"
                alt="Logo"
                className="w-[100px] h-auto sm:w-[150px]"
              />
            </Link>

            <ul className="hidden sm:flex gap-10">
              {["Templates", "Marketplace", "Discover", "Pricing", "Learn"].map(
                (item, index) => (
                  <Link key={index} href={`/${item.toLowerCase()}`}>
                    <li
                      className={`${inter.className} text-medium font-light text-gray-500`}
                    >
                      {item}
                    </li>
                  </Link>
                )
              )}
            </ul>
          </div>

          {/* Buttons for Large Screens */}
          <div className="hidden sm:flex gap-4 items-center">
            {user ? (
              <>
                <img
                  src={user.profileImage}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className={`${inter.className} font-bold`}>
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-gray-400 p-2 px-4 rounded-lg font-bold text-sm"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setShowLogin(true);
                    setShowSignup(false);
                  }}
                  className="bg-gray-400 p-2 px-4 rounded-lg font-bold text-sm"
                >
                  Log in
                </button>
                <button
                  onClick={() => {
                    setShowSignup(true);
                    setShowLogin(false);
                  }}
                  className="bg-gray-900 text-white font-bold p-2 px-4 rounded-lg text-sm"
                >
                  Sign up free
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-3"
          >
            {isMenuOpen ? (
              <span className="text-red-600 text-lg font-bold">X</span>
            ) : (
              <>
                <span className="block w-6 h-1 bg-green-600 mb-1"></span>
                <span className="block w-6 h-1 bg-green-600 mb-1"></span>
                <span className="block w-6 h-1 bg-green-600"></span>
              </>
            )}
          </button>
        </nav>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-600 p-5 fixed top-28 right-7 w-[85vw] min-h-[30vh] shadow-lg rounded-xl">
          <ul className="space-y-4">
            {["Templates", "Marketplace", "Discover", "Pricing", "Learn"].map(
              (item, index) => (
                <Link key={index} href={`/${item.toLowerCase()}`}>
                  <li
                    className={`${inter.className} text-gray-200 text-lg font-bold mb-4`}
                    onClick={handleLinkClick}
                  >
                    {item}
                  </li>
                </Link>
              )
            )}
            <div className="mt-6 flex flex-col gap-3">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-gray-400 p-3 rounded-lg font-bold text-sm"
                >
                  Log out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShowLogin(true);
                      setShowSignup(false);
                      setIsMenuOpen(false);
                    }}
                    className="bg-gray-400 p-3 rounded-lg font-bold text-sm"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => {
                      setShowSignup(true);
                      setShowLogin(false);
                      setIsMenuOpen(false);
                    }}
                    className="bg-blue-600 text-white font-bold p-3 rounded-lg text-sm"
                  >
                    Sign up free
                  </button>
                </>
              )}
            </div>
          </ul>
        </div>
      )}

      {/* Login Form */}
      {showLogin && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-36 mb-44 max-w-md min-h-[50vh] mx-auto">
          <h2 className="text-2xl font-bold mb-4">Log in</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              className="w-full p-2 mb-4"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 w-full rounded-lg"
            >
              Log in
            </button>
          </form>
        </div>
      )}

      {/* Signup Form */}
      {showSignup && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-36 mb-44 max-w-md min-h-[50vh] mx-auto">
          <h2 className="text-2xl font-bold mb-4">Sign up</h2>
          <form onSubmit={handleSignupSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 w-full rounded-lg"
            >
              Sign up
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
