import React from 'react';
import { useNavigate, Link } from "react-router-dom";

// Image imports
import aiStrategyImg from "../assets/services/Ai-strategy.jpg";
import developmentImg from "../assets/services/development.jpg";
import marketingImg from "../assets/services/marketing.jpg";
import itImg from "../assets/services/IT.jpg";
import realestateImg from "../assets/services/RealEstate.jpg";
import cloudImg from "../assets/services/cloud.jpg";

// Service List with `link` added
const servicesList = [
  {
    title: "AI Strategy & Consulting",
    desc: "Align your business goals with impactful, scalable AI solutions tailored to your industry.",
    icon: "🧠",
    bg: aiStrategyImg,
    link: "/services/AIconsulting"
  },
  {
    title: "Web & Mobile Development",
    desc: "End-to-end development of responsive websites, mobile apps, and cloud-based systems.",
    icon: "💻",
    bg: developmentImg,
    link: "/services/webdevelopment"
  },
  {
    title: "Digital Marketing Solutions",
    desc: "Boost your digital presence with SEO, social media campaigns, PPC, and content marketing.",
    icon: "📢",
    bg: marketingImg,
    link: "/services/Marketing"
  },
  {
    title: "IT Solutions",
    desc: "Reliable IT infrastructure, cloud services, system integration, and tech support tailored to your business.",
    icon: "🖥️",
    bg: itImg,
    link: "/services/ITSolutions"
  },
  {
    title: "Real Estate Solutions",
    desc: "Streamline property listings, customer insights, and lead generation with smart digital tools.",
    icon: "🏠",
    bg: realestateImg,
    link: "/services/Realestate"
  },
  {
    title: "Cloud Solutions",
    desc: "Design, deploy, and manage scalable applications in the cloud with expert DevOps support.",
    icon: "☁️",
    bg: cloudImg,
    link: "/services/cloud"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const section = document.querySelector("#contact");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-gray-300 text-lg mb-16">
          We deliver a full spectrum of AI, development, marketing, and IT services to accelerate your business growth.
        </p>

        {/* Service Cards */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, i) => (
            <Link to={service.link} key={i}>
              <div
                className="relative p-6 rounded-xl overflow-hidden shadow-xl border border-white/10 hover:shadow-2xl transition hover:scale-[1.02] bg-black cursor-pointer group"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 rounded-xl z-0"
                  style={{
                    backgroundImage: `url(${service.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.6)',
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-xl z-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-semibold mb-2 text-indigo-300 group-hover:underline">{service.title}</h2>
                  <p className="text-gray-200 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-indigo-600 text-white p-10 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="mb-6">Let’s work together to build a product tailored to your vision.</p>
          <button
            onClick={handleContactClick}
            className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded hover:bg-gray-100 transition cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
      <footer className="bg-black text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/src/assets/logo.png"
                alt="Consultixs Logo"
                className="h-11 w-20 object-cover object-left rounded"
              />
              <span className="ml-3 text-2xl font-semibold text-white">Consultixs</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering businesses with cutting-edge AI and intelligent automation. Let us transform your ideas into scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#about-us" className="hover:text-white transition">About</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
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
            <div className="ml-12 flex space-x-4">
              <a href="#" className="hover:text-white transition text-xl"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-white transition text-xl"><i className="fab fa-x-twitter"></i></a>
              <a href="#" className="hover:text-white transition text-xl"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-white transition text-xl"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Consultixs. All rights reserved.
        </div>
      </footer>
    </div>

  );
};

export default Services;
