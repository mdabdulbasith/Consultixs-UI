import React from 'react';
import Footer from '../Components/Footer';

const Contact = () => {
    return (
        <>
            <section className="min-h-screen bg-black text-white py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-indigo-400">Contact Us</h1>
                    <p className="text-center text-gray-300 mb-12">
                        Have a project in mind or questions? Reach out to our team and we’ll get back to you shortly.
                    </p>

                    <form
                        className="space-y-6 bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm shadow-lg"
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
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
