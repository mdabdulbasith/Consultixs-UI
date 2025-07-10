import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-gray-300 py-16 mt-0 border-t border-white/15">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo & About */}
                <div>
                    <div className="flex items-center mb-4">
                        <img src={logo} alt="Consultixs Logo" className="h-8 w-12 object-cover object-left rounded" />

                        <span className="ml-3 text-2xl font-semibold text-white">Consultixs</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Empowering businesses with cutting-edge AI and intelligent automation.
                        Let us transform your ideas into scalable solutions.
                    </p>
                </div>

                {/* Pages Navigation */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Pages</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-white transition duration-200">Home</Link></li>
                        <li><Link to="/hire-talent" className="hover:text-white transition duration-200">Hire Talent</Link></li>
                        <li><Link to="/services" className="hover:text-white transition duration-200">Services</Link></li>
                        <li><Link to="/how-it-works" className="hover:text-white transition duration-200">How It Works</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition duration-200">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Email: <a href="mailto:info@consultixs.com" className="hover:underline">info@consultixs.com</a></li>
                        <li>Phone: +91 98765 43210</li>
                        <li>Location: Hyderabad, India</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                    <div className="ml-1 flex space-x-4">
                        <a href="#" className="hover:text-white transition text-xl" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#" className="hover:text-white transition text-xl" aria-label="X (Twitter)">
                            <i className="fab fa-x-twitter" />
                        </a>
                        <a href="#" className="hover:text-white transition text-xl" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="#" className="hover:text-white transition text-xl" aria-label="Instagram">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Consultixs. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
