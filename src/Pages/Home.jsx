import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FAQSection from "../Components/FAQSection";

function Home() {
    return (
        <>
            <main id='home' className="relative h-screen w-full">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="https://3302407.fs1.hubspotusercontent-na1.net/hubfs/3302407/homepage-banner-bg-video_1.mp4"
                ></video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-5xl font-bold mb-4">Empowering Innovation Across Industries</h1>
                    <p className="text-xl max-w-2xl">
                        From AI, IT solutions, and Digital Marketing to Web Development and Real Estate — we help you build, grow, and lead in the digital era.
                    </p>
                </div>
            </main>

            <section
                id="about-us"
                className="w-full py-28 text-white relative overflow-hidden"
            >
                {/* Gradient Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(circle at top left, #0f172a, #1e3a8a)",
                        opacity: 0.95
                    }}
                ></div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto text-center px-4 md:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-14 tracking-tight leading-tight">
                        About <span className="text-white drop-shadow-lg">Consultixs</span>
                    </h2>

                    {/* Intro Block */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-white shadow-[0_8px_30px_rgba(0,0,0,0.3)] space-y-6 hover:shadow-indigo-500/30 transition duration-300">
                        <p className="text-lg md:text-xl leading-relaxed">
                            At <span className="font-semibold text-white">Consultixs</span>, we are a multi-domain tech partner delivering
                            <span className="font-medium"> AI solutions</span>,
                            <span className="font-medium"> IT services</span>,
                            <span className="font-medium"> Digital Marketing strategies</span>, and
                            <span className="font-medium"> Web development</span> tools to empower businesses across industries.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed">
                            From real estate automation to e-commerce intelligence, we blend innovation and execution to help you scale faster, operate smarter, and achieve your digital vision.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="my-20 w-1/2 h-[2px] bg-gradient-to-r from-white/0 via-white/60 to-white/0 mx-auto animate-pulse" />

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-10 text-left mt-10">
                        {[
                            {
                                title: "🎯 Our Mission",
                                desc:
                                    "To bridge the gap between modern business demands and emerging technologies — helping organizations make bold, data-driven, and scalable moves in a digital-first world.",
                            },
                            {
                                title: "👥 Our Team",
                                desc:
                                    "A vibrant mix of developers, marketers, AI engineers, designers, and strategists — all focused on creating real-world impact through customized digital solutions.",
                            },
                            {
                                title: "💡 Why Choose Us?",
                                desc:
                                    "Expertise across AI, IT, and Marketing. Tailored end-to-end digital solutions. Client-first, collaborative approach. Proven success in multiple industries.",
                            },
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:shadow-xl transition duration-300 shadow-md"
                            >
                                <h3 className="text-2xl font-bold mb-3 text-white">{card.title}</h3>
                                <p className="text-base text-white/90 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="w-full px-6 py-24 bg-gradient-to-b from-black via-black/90 to-black text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-12 text-indigo-400 drop-shadow-md">Industries We Serve</h3>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {[
                            {
                                title: "IT Services",
                                icon: "fas fa-server",
                                desc: "Cloud solutions, IT support systems, DevOps automation, and SaaS tools."
                            },
                            {
                                title: "Development",
                                icon: "fas fa-code",
                                desc: "Web development, mobile apps, CMS, and custom software solutions."
                            },
                            {
                                title: "Digital Marketing",
                                icon: "fas fa-bullhorn",
                                desc: "SEO, performance campaigns, AI-driven targeting, and conversion optimization."
                            },
                            {
                                title: "Real Estate",
                                icon: "fas fa-building",
                                desc: "Property listing automation, virtual tours, and lead generation tools."
                            },
                            {
                                title: "Finance",
                                icon: "fas fa-chart-line",
                                desc: "Fraud detection, algorithmic trading, credit scoring, and compliance systems."
                            },
                            {
                                title: "Retail & E-Commerce",
                                icon: "fas fa-shopping-cart",
                                desc: "Personalized recommendations, customer behavior insights, and smart inventory."
                            },
                        ].map((industry, i) => (
                            <div
                                key={i}
                                className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:bg-white/10 hover:shadow-2xl transition-all duration-300 text-left"
                            >
                                <div className="text-4xl text-indigo-300 mb-4">
                                    <i className={industry.icon}></i>
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2 tracking-wide">{industry.title}</h4>
                                <p className="text-sm text-gray-300 leading-relaxed">{industry.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-indigo-400 drop-shadow-sm">Our Services</h2>
                        <ul className="space-y-4 text-gray-300 list-disc list-inside text-base leading-relaxed">
                            <li><strong className="text-white">AI Consulting:</strong> Smart strategies for real-world AI adoption.</li>
                            <li><strong className="text-white">Web & Mobile Development:</strong> Custom, responsive digital experiences.</li>
                            <li><strong className="text-white">Digital Marketing:</strong> SEO, ads, and social media campaigns.</li>
                            <li><strong className="text-white">IT Solutions:</strong> Cloud, DevOps, and tech infrastructure.</li>
                            <li><strong className="text-white">API Integration:</strong> Seamless third-party connectivity.</li>
                            <li><strong className="text-white">Corporate Training:</strong> Upskilling teams in AI & tech.</li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <img
                            src="https://www.museumnext.com/wp-content/uploads/2023/06/artificial_intellegence.jpg"
                            alt="Tech Services Illustration"
                            className="w-full max-w-md mx-auto rounded-xl shadow-2xl border border-white/10"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 bg-gradient-to-br from-gray-950 to-black text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        Key <span className="text-indigo-400">Features</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: "⚙️", title: "Smart Automation", desc: "Boost efficiency with automated workflows, bots, and AI routines." },
                            { icon: "📊", title: "Data-Driven Insights", desc: "Leverage real-time dashboards, reports, and analytics." },
                            { icon: "🌐", title: "Full-Stack Development", desc: "Custom web & mobile apps built for scalability and performance." },
                            { icon: "📣", title: "Digital Marketing Suite", desc: "SEO, PPC, and social media tools to grow your online presence." },
                            { icon: "🔐", title: "Enterprise-Grade Security", desc: "End-to-end encryption, compliance, and threat prevention." },
                            { icon: "☁️", title: "Cloud-Native Solutions", desc: "Deploy anywhere — AWS, Azure, GCP, or private cloud." }
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white/5 hover:bg-white/10 transition p-6 rounded-xl border border-white/10 shadow-lg backdrop-blur-md"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-2xl font-semibold text-indigo-300 mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">Awards & Recognition</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-gray-300">
                        {[
                            { title: "AI Startup of the Year", desc: "Recognized by TechWorld 2024 for innovation in scalable AI deployment." },
                            { title: "Top 50 Emerging AI Companies", desc: "Listed by Global AI Index for our impact across industries." },
                            { title: "Client Excellence Award", desc: "Awarded by B2B Expo for highest-rated client satisfaction in tech." }
                        ].map((award, i) => (
                            <div key={i} className="border border-white/20 bg-white/5 p-6 rounded-xl hover:shadow-lg hover:border-indigo-400 transition-all">
                                <h4 className="text-xl font-semibold mb-2 text-indigo-400">{award.title}</h4>
                                <p>{award.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-14">What Our <span className="text-indigo-400">Clients Say</span></h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Aarav Mehta",
                                role: "CTO, FinEdge",
                                quote: "Consultixs transformed our backend workflows with intelligent automation. Our ROI improved by 35%!"
                            },
                            {
                                name: "Sana Roy",
                                role: "Product Manager, HealthSync",
                                quote: "The team truly understood healthcare challenges and built tools our doctors actually use!"
                            },
                            {
                                name: "Daniel Costa",
                                role: "CEO, LogiAI",
                                quote: "Consultixs delivered fast, secure and scalable AI APIs that integrated right into our stack."
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow hover:shadow-2xl transition">
                                <p className="text-gray-300 italic mb-6">“{t.quote}”</p>
                                <div className="text-left">
                                    <p className="font-semibold text-indigo-300">{t.name}</p>
                                    <p className="text-sm text-gray-400">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <FAQSection />

            {/* Contact Form Section */}
            <section id="contact" className="py-24 bg-gradient-to-b from-black via-black/90 to-black text-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400 drop-shadow">Get in Touch</h2>

                    <form className="space-y-6 bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm shadow-xl">
                        <div>
                            <label className="block mb-1 font-medium text-white">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-black/70 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-black/70 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-white">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your message here..."
                                required
                                className="w-full px-4 py-2 rounded-lg bg-black/70 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-gray-300 py-16 px-6 mt-10 border-t border-white/10">
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
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Empowering businesses with cutting-edge AI and intelligent automation.
                            Let us transform your ideas into scalable solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#features" className="hover:text-white transition duration-200">Features</a></li>
                            <li><a href="#services" className="hover:text-white transition duration-200">Services</a></li>
                            <li><a href="#about-us" className="hover:text-white transition duration-200">About</a></li>
                            <li><a href="#contact" className="hover:text-white transition duration-200">Contact</a></li>
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




        </>
    );
}
export default Home;