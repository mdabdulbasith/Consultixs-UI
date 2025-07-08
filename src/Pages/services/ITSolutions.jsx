import React from 'react';
import { useNavigate } from "react-router-dom";

const ITSolutions = () => {
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
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-indigo-400 drop-shadow-md">
          IT Solutions
        </h1>
        <div className="w-24 h-1 mx-auto bg-indigo-500 rounded-full mb-6 animate-pulse" />
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Empower your business with secure, scalable IT infrastructure, expert consulting, and technical support.
        </p>
      </div>

      {/* What We Offer Section */}
      <div className="relative z-10 max-w-4xl mx-auto mt-20">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl p-10 md:p-14 transition duration-300 hover:shadow-indigo-500/40">
          <h2 className="text-3xl font-semibold text-indigo-300 mb-8 text-center">What We Offer</h2>
          <ul className="space-y-5 text-gray-300 text-lg leading-relaxed list-none">
            <li className="flex items-start gap-3">
              <i className="fas fa-cloud text-indigo-400 text-xl mt-1" />
              <span><strong className="text-white">Cloud Infrastructure:</strong> Design, deploy, and manage cloud environments tailored to your needs.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-network-wired text-indigo-400 text-xl mt-1" />
              <span><strong className="text-white">System Integration:</strong> Seamless networking, device configuration, and enterprise IT setup.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-user-cog text-indigo-400 text-xl mt-1" />
              <span><strong className="text-white">IT Consulting:</strong> Strategy planning and architecture consultation for growth & efficiency.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-headset text-indigo-400 text-xl mt-1" />
              <span><strong className="text-white">Helpdesk Support:</strong> Ongoing technical assistance and system maintenance.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-shield-virus text-indigo-400 text-xl mt-1" />
              <span><strong className="text-white">Security & Compliance:</strong> Data protection, audit readiness, and cyber risk mitigation.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 mt-24 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Your Trusted IT Partner</h3>
        <p className="text-gray-300 mb-6">
          Our tech experts ensure your systems run smoothly, securely, and without downtime.
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

export default ITSolutions;
