import React from 'react';
import { useNavigate } from "react-router-dom";

const servicesList = [
  {
    title: "AI Strategy Consulting",
    desc: "Align your business objectives with practical AI use cases to maximize ROI.",
    icon: "🧠"
  },
  {
    title: "Custom AI Solutions",
    desc: "End-to-end tailored AI model development based on your unique challenges.",
    icon: "🔧"
  },
  {
    title: "AI API Integration",
    desc: "Seamlessly integrate our AI services into your existing platforms or apps.",
    icon: "🔗"
  },
  {
    title: "Data Analytics & Visualization",
    desc: "Unlock insights from complex data through dashboards and predictive models.",
    icon: "📊"
  },
  {
    title: "Natural Language Processing (NLP)",
    desc: "Build chatbots, sentiment analysis, and document summarizers.",
    icon: "🗣️"
  },
  {
    title: "Computer Vision",
    desc: "Object detection, image classification, and facial recognition solutions.",
    icon: "📸"
  },
  {
    title: "Model Training & Evaluation",
    desc: "Train, fine-tune, and benchmark ML models using your proprietary data.",
    icon: "📈"
  },
  {
    title: "AI-Powered Automation",
    desc: "Automate repetitive tasks in HR, finance, marketing, and operations.",
    icon: "⚙️"
  },
  {
    title: "AI Workshops & Training",
    desc: "Upskill your workforce with hands-on AI training sessions.",
    icon: "🎓"
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/", { replace: true });

    setTimeout(() => {
      const section = document.querySelector("#contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-gray-300 text-lg mb-16">
          We offer a comprehensive suite of AI services to help you innovate and lead.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl text-left hover:bg-white/10 transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-2 text-indigo-400">{service.title}</h2>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 bg-indigo-600 text-white p-10 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="mb-6">Let’s work together to build an AI-driven product tailored to your needs.</p>
          <button
            onClick={handleContactClick}
            className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded hover:bg-gray-100 transition cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
