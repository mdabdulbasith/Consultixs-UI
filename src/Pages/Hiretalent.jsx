import React from 'react';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const HireTalent = () => {
    return (
        <>
            <div className="bg-black text-white">
                {/* Hero Section */}
                <section className="text-center pt-30 pb-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Hire The Best Talent <span className="text-indigo-500">Now !!!</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
                        Making IT work for you, we align technology with your unique needs to fuel business success and resilience.
                    </p>
                    <div>
                        <Link
                            to="/contact"
                            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg text-white font-medium transition-all shadow-md inline-block"
                        >
                            Get A Quote
                        </Link>

                    </div>
                </section>


                {/* Gradient Divider */}
                <div className="h-[2px] w-1/3 mx-auto bg-gradient-to-r from-white/0 via-white/40 to-white/0 my-12" />

                {/* Talent Sections */}
                <section className="py-15 px-6 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-indigo-400 drop-shadow-md">
                            Build Your Dream Team
                        </h2>
                        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                            Whether you're scaling a startup or transforming an enterprise, we connect you with world-class talent across technology, marketing, real estate, and support domains.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                            {[
                                {
                                    title: "Web & App Development",
                                    desc: "Skilled in modern stacks and frameworks:",
                                    points: [
                                        "React, Angular, Vue, Ember.js",
                                        "Laravel, CodeIgniter, Bootstrap",
                                        "Android (Kotlin), iOS (Swift), Flutter, Ionic",
                                    ],
                                },
                                {
                                    title: "Backend & Cloud Engineers",
                                    desc: "Robust server-side and scalable cloud expertise:",
                                    points: [
                                        "Node.js, Python, Java, PHP, .NET",
                                        "Spring Boot, Django, GoLang",
                                        "DevOps, AWS, Azure, GCP",
                                    ],
                                },
                                {
                                    title: "CMS & E-Commerce",
                                    desc: "Build and optimize digital storefronts:",
                                    points: [
                                        "Magento, WooCommerce, WordPress",
                                        "PrestaShop, Shopify, BigCommerce",
                                    ],
                                },
                                {
                                    title: "Digital Marketing & Strategy",
                                    desc: "Drive traffic, growth, and brand awareness:",
                                    points: [
                                        "SEO, SEM, Google Ads",
                                        "Social Media Management",
                                        "Conversion Optimization",
                                    ],
                                },
                                {
                                    title: "Real Estate Specialists",
                                    desc: "Optimize operations with trained real estate VAs:",
                                    points: [
                                        "Lead Gen, Cold Calling, Inside Sales",
                                        "Loan Officer Assistants, Title Search",
                                        "Property Acquisition & Analysis",
                                    ],
                                },
                                {
                                    title: "Support & KPO",
                                    desc: "Reliable back-office and research professionals:",
                                    points: [
                                        "Data Entry, Email & Chat Support",
                                        "Financial & Investment Research",
                                        "Ticketing & General Operations",
                                    ],
                                },
                            ].map((role, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-md hover:shadow-indigo-400/40 backdrop-blur-md transition-all duration-300"
                                >
                                    <h3 className="text-xl font-bold text-indigo-400 mb-2">
                                        {role.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-2">{role.desc}</p>
                                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                                        {role.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <Link
                                to="/contact"
                                className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg text-white font-medium transition-all shadow-md inline-block"
                            >
                                Get A Quote
                            </Link>

                        </div>
                    </div>
                </section>

                {/* Clients Section */}
                <section className="text-center mt-14 px-6">
                    <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-md">Few of Our Clients</h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-10">
                        We take pride in earning the trust of our clients through our dedication, expertise, and results-driven approach.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-white text-base md:text-lg font-medium">
                        <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">AFN – Mortgage Industry</span>
                        <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">FFC – Real Estate Industry</span>
                        <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">One Source Media – Marketing</span>
                        <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Precision Technical – IT</span>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center mt-24 pb-24 px-6">
                    <h2 className="text-4xl font-bold mb-4 text-indigo-400 drop-shadow-md">Partner With Us</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-6 text-lg">
                        Empowering industries and transforming human experiences through innovative solutions and cutting-edge strategies.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg text-white font-medium transition-all shadow-md inline-block"
                    >
                        Contact Us
                    </Link>

                </section>
            </div>

            <Footer />
        </>
    );
};

export default HireTalent;
