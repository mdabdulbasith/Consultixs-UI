import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const HowItWorks = () => {
  return (
    <>
      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="text-center pt-24 pb-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
            How It Works
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            Discover how Consultixs streamlines your hiring process — from finding top-tier talent to successful team integration.
          </p>
        </section>

        {/* Divider */}
        <div className="h-[2px] w-1/3 mx-auto bg-gradient-to-r from-white/0 via-white/40 to-white/0 my-12" />

        {/* Hire Developers Section */}
        <section className="text-center px-6 pb-20">
          <h2 className="text-4xl font-bold mb-6 text-indigo-400 drop-shadow-md">
            Hire Developers – Offshore & On-Demand
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
            Partnering with us makes hiring dedicated developers for your project easier than ever. Whether you need custom software, mobile apps, marketing experts, or virtual assistants — we’ve got you covered.
          </p>
          <p className="text-xl font-semibold text-white mb-4">
            Starting from <span className="text-indigo-400">$22/hour</span>
          </p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-medium transition-all shadow-md"
          >
            Hire Now
          </Link>
        </section>

        {/* Technology Coverage Section */}
        <section className="text-center bg-gray-900 py-20 px-6">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-md">We Cover Every Major Tech & Role</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-10">
            From frontend to backend, mobile to cloud, CMS to real estate, we provide skilled professionals across every domain.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Frontend (React, Angular, Vue)</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Backend (Node, Python, PHP, Java)</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Cloud (AWS, Azure, GCP)</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Mobile (iOS, Android, Flutter)</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">CMS (WordPress, Shopify)</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Marketing (SEO, SMM)</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Support (Chat, Data Entry, VA)</span>
          </div>
        </section>

        {/* Hiring Models Section */}
        <section className="py-24 px-6 bg-black text-center">
          <h2 className="text-4xl font-bold text-indigo-400 mb-6 drop-shadow-md">Our Flexible Hiring Models</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
            Choose the model that fits your project timeline, budget, and workflow. We offer transparent billing and signed NDAs for every engagement.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
            {[
              {
                title: "Monthly",
                details: [
                  "Engagement: Fixed Monthly",
                  "Billing: Monthly",
                  "Tracking: Daily reports via Jira/Basecamp",
                  "Working Hours: 4 hrs/day, 5 days/week",
                  "Min Commitment: 2 months",
                ],
              },
              {
                title: "Quarterly",
                details: [
                  "Engagement: Fixed for 3 months",
                  "Billing: Monthly",
                  "Tracking: Daily reports via Jira/Basecamp",
                  "Working Hours: 4 hrs/day, 5 days/week",
                  "Min Commitment: 3 months",
                ],
              },
              {
                title: "Yearly",
                details: [
                  "Engagement: Long-term contract",
                  "Billing: Monthly",
                  "Tracking: Daily reports via Jira/Basecamp",
                  "Working Hours: 4 hrs/day, 5 days/week",
                  "Min Commitment: 12 months",
                ],
              },
              {
                title: "Hourly",
                details: [
                  "Engagement: On-demand",
                  "Billing: Weekly or Monthly",
                  "Tracking: Time logs & reports",
                  "Working Hours: Flexible (min 4 hrs/day)",
                ],
              },
            ].map((model, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-indigo-500/30 transition-all"
              >
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">{model.title}</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                  {model.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-indigo-300 italic">We sign NDAs</p>
              </div>
            ))}
          </div>
        </section>

        {/* Developer Tiers Section */}
        <section className="text-center py-24 px-6 bg-gray-900">
          <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-md">Choose Based on Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
            Scale smart with the right talent — from junior coders to seasoned engineers.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
            {[
              {
                level: "Junior Developers",
                price: "$17/hr",
                experience: "1–3 Years",
              },
              {
                level: "Mid-Level Developers",
                price: "$22/hr",
                experience: "3–5 Years",
              },
              {
                level: "Senior Developers",
                price: "$29/hr",
                experience: "5+ Years",
              },
            ].map((dev, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-indigo-400/30 transition-all"
              >
                <h3 className="text-xl font-bold text-indigo-400 mb-2">{dev.level}</h3>
                <p className="text-white text-lg font-semibold">{dev.price}</p>
                <p className="text-sm text-gray-400 mb-4">{dev.experience} of Experience</p>
                <ul className="text-sm text-gray-300 space-y-1 mb-4">
                  <li>Project Manager Support</li>
                  <li>Time Zone Flexibility</li>
                  <li>40 Hours/Week</li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-block bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-md text-white font-medium transition"
                >
                  Hire Now
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default HowItWorks;
