import React, { useState, useEffect } from 'react';
import logo from '/src/assets/logo.png';
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (target) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const section = document.querySelector(target);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.querySelector(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
          <button onClick={() => handleNavClick('#home')} className="hover:underline cursor-pointer">HOME</button>
          <button onClick={() => handleNavClick('#about-us')} className="hover:underline cursor-pointer">ABOUT US</button>
          <Link to="/services" className="hover:underline">SERVICES</Link>
          <button onClick={() => handleNavClick('#contact')} className="hover:underline cursor-pointer">CONTACT</button>
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
          <div className="flex flex-col gap-4 mt-6 text-left text-base px-2">
            <button onClick={() => { handleNavClick('#home'); setMenuOpen(false); }} className="text-white text-left">Home</button>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="text-white text-left">Services</Link>
            <button onClick={() => { handleNavClick('#about-us'); setMenuOpen(false); }} className="text-white text-left">About Us</button>
            <button onClick={() => { handleNavClick('#contact'); setMenuOpen(false); }} className="text-white text-left">Contact</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
