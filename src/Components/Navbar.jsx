import React, { useState, useEffect } from 'react';
import logo from '/src/assets/logo.png';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll(); // Check on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full px-6 py-4 z-30 flex justify-between items-center transition-all duration-500 ease-in-out 
        ${isScrolled ? 'bg-white text-black shadow' : 'bg-transparent text-white'}`}
      >
        <div className="flex items-center">
          <img src={logo} alt="Consultixs Logo" className="h-11 w-20 object-cover object-left rounded" />
          <h1 className="text-3xl font-bold ml-2">Consultixs</h1>
        </div>
        <nav className="hidden md:flex space-x-6 text-xl font-medium">
          <a href="#home" className="hover:underline">HOME</a>
          <a href="#features" className="hover:underline">FEATURES</a>
          <a href="#services" className="hover:underline">SERVICES</a>
          <a href="#about-us" className="hover:underline">ABOUT US</a>
          <a href="#contact" className="hover:underline">CONTACT</a>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none z-40"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-40 transform transition-transform duration-300 ease-in-out 
        ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="p-6 space-y-6 text-sm font-medium">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-black text-xl ml-auto bg-white px-2"
          >
            X
          </button>
          <div className="flex flex-col gap-4 mt-6">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about-us" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
