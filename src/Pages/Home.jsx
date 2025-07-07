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
                    <h1 className="text-5xl font-bold mb-4">Welcome to Our AI Platform</h1>
                    <p className="text-xl max-w-2xl">
                        Transform your business with cutting-edge artificial intelligence solutions.
                    </p>
                </div>
            </main>

            <section
                className="w-full px-6 py-24 bg-gradient-to-b from-black via-black/90 to-black text-white"
                id="about-us"
            >
                <div className="max-w-5xl mx-auto text-center px-4 md:px-8">
                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-14 tracking-tight leading-tight">
                        About <span className="text-indigo-400">Consultixs</span>
                    </h2>

                    {/* Intro Block */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl space-y-6 transition hover:shadow-2xl">
                        <p className="text-lg md:text-xl leading-relaxed">
                            At <span className="font-semibold text-indigo-300">Consultixs</span>, At Consultixs, we specialize in delivering next-generation AI solutions that drive{" "}
                            <span className="font-medium text-white">efficiency</span>,{" "}
                            <span className="font-medium text-white">automation</span>, and strategic intelligence for modern enterprises.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed">
                            With a dedicated team of AI researchers and engineers, we are committed to helping businesses adapt and grow using the true power of artificial intelligence. Whether you're starting or scaling, our solutions are built to evolve with your vision.{" "}

                        </p>
                    </div>

                    {/* Divider */}
                    <div className="my-20 h-px bg-white/10 w-1/2 mx-auto" />

                    {/* Mission */}
                    <div className="mb-20" data-aos="fade-up">
                        <h3 className="text-3xl font-semibold mb-4 text-indigo-400">Our Mission</h3>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            To bridge the gap between business needs and AI innovation — empowering organizations to make confident,
                            data-driven decisions with scalable, intelligent tools.
                        </p>
                    </div>

                    {/* Team */}
                    <div className="mb-20" data-aos="fade-up">
                        <h3 className="text-3xl font-semibold mb-4 text-indigo-400">Our Team</h3>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            A passionate blend of data scientists, machine learning engineers, analysts, and strategists — driven to create
                            AI products that solve real-world problems and accelerate innovation.
                        </p>
                    </div>

                    {/* Why Choose Us */}
                    <div className="mb-20" data-aos="fade-up">
                        <h3 className="text-3xl font-semibold mb-6 text-indigo-400">Why Choose Us?</h3>
                        <ul className="list-disc list-inside text-gray-300 text-lg max-w-3xl mx-auto space-y-3 leading-relaxed text-center">
                            <li>Expertise in real-world AI deployment</li>
                            <li>Tailored solutions for diverse industries</li>
                            <li>Dedicated support and consultation</li>
                            <li>Strong focus on security and scalability</li>
                        </ul>
                    </div>

                    {/* Industries We Serve */}
                    <div data-aos="fade-up">
                        <h3 className="text-3xl font-semibold mb-10 text-indigo-400">Industries We Serve</h3>
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
                            {[
                                { title: "Healthcare", icon: "fas fa-heartbeat", desc: "Diagnostics, patient analytics, and health tech." },
                                { title: "Finance", icon: "fas fa-chart-line", desc: "Fraud detection, trading systems, risk analysis." },
                                { title: "Retail", icon: "fas fa-shopping-cart", desc: "Personalized shopping, inventory insights." },
                                { title: "Manufacturing", icon: "fas fa-industry", desc: "Automation, quality inspection, supply chain AI." },
                                { title: "Education", icon: "fas fa-graduation-cap", desc: "Adaptive learning, performance analytics." },
                                { title: "Logistics", icon: "fas fa-truck", desc: "Route optimization, real-time fleet tracking." }
                            ].map((industry, i) => (
                                <div
                                    key={i}
                                    className="bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl text-left transition backdrop-blur-sm"
                                >
                                    <div className="text-3xl text-indigo-300 mb-4">
                                        <i className={industry.icon}></i>
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-2">{industry.title}</h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">{industry.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Services Section */}
                    <section id="services" className="py-24 bg-black text-white">
                        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-6">Our Services</h2>
                                <ul className="space-y-4 text-gray-300 list-disc list-inside">
                                    <li><strong className="text-white">AI Strategy Consulting:</strong> Align your goals with real-world AI use cases.</li>
                                    <li><strong className="text-white">Custom AI Development:</strong> Tailored solutions that address your unique challenges.</li>
                                    <li><strong className="text-white">API Integration:</strong> Use our cloud-hosted AI models in your app.</li>
                                    <li><strong className="text-white">AI Training & Workshops:</strong> Equip your team with cutting-edge knowledge.</li>
                                </ul>
                            </div>
                            <div className="hidden md:block">
                                <img src="https://www.museumnext.com/wp-content/uploads/2023/06/artificial_intellegence.jpg" alt="AI Services Illustration" className="w-full max-w-md mx-auto" />
                            </div>
                        </div>
                    </section>


                    {/* Features Section */}
                    <section id="features" className="py-24 bg-black text-white">
                        <div className="max-w-7xl mx-auto px-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                                Key <span className="text-indigo-400">Features</span>
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                {[
                                    {
                                        icon: "🤖",
                                        title: "AI-Powered Automation",
                                        desc: "Reduce manual work with smart, rule-based workflows and predictive AI."
                                    },
                                    {
                                        icon: "📈",
                                        title: "Real-Time Analytics",
                                        desc: "Gain insights instantly through streaming data visualization and KPIs."
                                    },
                                    {
                                        icon: "🔒",
                                        title: "Enterprise Security",
                                        desc: "Military-grade encryption and compliance with industry standards."
                                    },
                                    {
                                        icon: "🔗",
                                        title: "Seamless Integration",
                                        desc: "Easily plug into your CRM, ERP, or cloud system with powerful APIs."
                                    },
                                    {
                                        icon: "💡",
                                        title: "Custom AI Models",
                                        desc: "Solutions tailored to your business needs, trained on your own data."
                                    },
                                    {
                                        icon: "📡",
                                        title: "Cloud Deployment",
                                        desc: "Deploy in the cloud or on-premise with high availability & scalability."
                                    }
                                ].map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white/5 hover:bg-white/10 transition p-6 rounded-xl border border-white/10 shadow-lg backdrop-blur-md"
                                    >
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h3 className="text-2xl font-semibold text-indigo-300 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-300">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


                    {/* Awards Section */}
                    <section className="py-20 bg-black text-white text-center">
                        <div className="max-w-4xl mx-auto px-6">
                            <h2 className="text-4xl md:text-5xl font-bold mb-12">Awards & Recognition</h2>
                            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
                                <div className="border border-white/20 bg-white/5 p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold mb-2 text-indigo-400">AI Startup of the Year</h4>
                                    <p>Recognized by TechWorld 2024 for innovation in scalable AI deployment.</p>
                                </div>
                                <div className="border border-white/20 bg-white/5 p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold mb-2 text-indigo-400">Top 50 Emerging AI Companies</h4>
                                    <p>Listed by Global AI Index for our impact across industries.</p>
                                </div>
                                <div className="border border-white/20 bg-white/5 p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold mb-2 text-indigo-400">Client Excellence Award</h4>
                                    <p>Awarded by B2B Expo for highest-rated client satisfaction in tech.</p>
                                </div>
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

                    {/* Get In Touch */}
                    <div className="mt-20 max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl font-semibold mb-6 text-indigo-400">Ready to Transform Your Business?</h3>
                        <p className="text-base md:text-lg text-gray-300 mb-6">
                            Let’s discuss how Consultixs can help you integrate AI and accelerate growth. Whether you're a startup or enterprise, we have the right solution for you.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-6 py-3 my-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition"
                        >
                            Contact Us
                        </a>
                    </div>
                    <FAQSection />

                    {/* Contact Form Section */}
                    <section id="contact" className="py-20 bg-gradient-to-b from-black via-black/90 to-black text-white">
                        <div className="max-w-3xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>

                            <form
                                className="space-y-6 bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm"
                            >
                                <div>
                                    <label className="block mb-1 font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-black/70 border border-white/20 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-black/70 border border-white/20 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="Your message here..."
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-black/70 border border-white/20 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className='w-full bg-indigo-600 hover:bg-indigo-500
                                        text-white font-semibold py-2 px-4 rounded-lg transition cursor-pointer'
                                >Send Message
                                </button>
                            </form>
                        </div>
                    </section>



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
            </section>
        </>
    );
}
export default Home;