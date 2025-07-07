import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqData = [
    {
        question: "What services does Consultixs offer?",
        answer: "We offer AI consulting, model development, integrations, and scalable solutions tailored to your business.",
    },
    {
        question: "Do you support multiple industries?",
        answer: "Yes, including Healthcare, Finance, Logistics, Retail, and more.",
    },
    {
        question: "Is my data safe with Consultixs?",
        answer: "Absolutely. We use enterprise-grade security and comply with global data protection standards.",
    },
    {
        question: "Can I see a demo or trial?",
        answer: "Yes! We offer demo sessions and limited access trials upon request.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">Frequently Asked Questions</h2>

                <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="border border-white/10 bg-white/5 rounded-xl">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                                >
                                    <span className="text-lg md:text-xl font-medium text-white">{item.question}</span>
                                    <span
                                        className={`transition-transform duration-300 transform ${openIndex === index ? 'rotate-45' : 'rotate-0'
                                            }`}
                                    >
                                        <Plus size={28} strokeWidth={2} />
                                    </span>

                                </button>

                                {openIndex === index && (
                                    <div className="px-6 pb-5 pt-0 text-base md:text-lg text-gray-300 leading-relaxed">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
