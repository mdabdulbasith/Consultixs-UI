// src/pages/services/DigitalMarketing.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";

const DigitalMarketing = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const section = document.querySelector("#contact");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] via-[#09090f] to-[#0f0f1b] text-white px-6 py-28 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400 drop-shadow-md">
          Digital Marketing Solutions
        </h1>
        <div className="w-24 h-1 mx-auto bg-indigo-500 rounded-full mb-6 animate-pulse" />
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Drive traffic, build brand awareness, and grow your business through strategic digital marketing services.
        </p>
      </div>

      {/* Offerings Section */}
      <div className="relative z-10 max-w-4xl mx-auto mt-20">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl p-10 md:p-14 transition duration-300 hover:shadow-indigo-500/40">
          <h2 className="text-3xl font-semibold text-indigo-300 mb-8 text-center">What We Offer</h2>
          <ul className="space-y-5 text-gray-300 text-lg leading-relaxed list-none">
            <li className="flex items-start gap-3">
              <i className="fas fa-search-dollar text-indigo-400 text-xl mt-1" />
              <span><strong className="text-white">SEO Optimization:</strong> Boost your search engine visibility to attract organic traffic.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-bullhorn text-indigo-400 text-xl mt-1" />
              <span><strong className="text-white">PPC Advertising:</strong> Run targeted ad campaigns on Google & social platforms.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-hashtag text-indigo-400 text-xl mt-1" />
              <span><strong className="text-white">Social Media Strategy:</strong> Engage audiences and build community across platforms.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-envelope-open-text text-indigo-400 text-xl mt-1" />
              <span><strong className="text-white">Email Marketing:</strong> Design automation workflows and newsletters that convert.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-chart-line text-indigo-400 text-xl mt-1" />
              <span><strong className="text-white">Analytics & CRO:</strong> Track metrics and optimize for conversions with data-driven insights.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 mt-24 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Let’s Elevate Your Brand Online</h3>
        <p className="text-gray-300 mb-6">
          Reach your ideal audience with targeted, data-driven digital marketing strategies.
        </p>
        <button
          onClick={handleContactClick}
          className="inline-block px-7 py-3 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-full shadow-lg hover:shadow-indigo-700/50 transition-all"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default DigitalMarketing;
