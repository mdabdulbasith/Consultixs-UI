import React, { useState } from 'react';
import Footer from '../Components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');

        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`
                , {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

            const data = await res.json();

            if (res.ok) {
                setSuccess('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setError(data.error || 'Something went wrong.');
            }
        } catch (err) {
            console.error(err);
            setError('Server error. Try again later.');
        }
    };

    return (
        <>
            <section className="min-h-screen bg-black text-white py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-indigo-400">Contact Us</h1>
                    <p className="text-center text-gray-300 mb-12">
                        Have a project in mind or questions? Reach out to our team and we’ll get back to you shortly.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm shadow-lg"
                    >
                        <div>
                            <label className="block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
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
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.message}
                                onChange={handleChange}
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

                        {success && <p className="text-green-400 mt-4">{success}</p>}
                        {error && <p className="text-red-400 mt-4">{error}</p>}
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
