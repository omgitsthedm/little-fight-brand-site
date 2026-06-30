import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "I'm not good with technology. Can you still help me?",
    answer: "Absolutely. We specialize in helping people who aren't tech-savvy. We'll explain everything in plain English, never make you feel silly for asking questions, and make sure you understand what we're doing before we do it.",
  },
  {
    question: 'Do you come to my business location?',
    answer: "Yes! We provide on-site support throughout Manhattan, Brooklyn, and Queens. For businesses outside NYC, we offer comprehensive remote support via screen sharing and video calls.",
  },
  {
    question: 'How much does this cost?',
    answer: "We offer transparent, flat-rate pricing with no hidden fees. Quick fixes start at $150, websites from $1,200, and monthly support from $350/month. Your first consultation hour is always free.",
  },
  {
    question: 'Can you help fix my POS system or cash register?',
    answer: "Definitely. We work with Square, Clover, Toast, and most major POS systems. Whether it's setup, troubleshooting, or training your staff—we've got you covered.",
  },
  {
    question: 'Why is it called Little Fight NYC?',
    answer: "Because running a small business in NYC is a little fight every day. We're here to take the tech fight off your hands so you can focus on what you do best.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-bone py-20 lg:py-28">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20 fade-up-section">
          <span className="eyebrow mb-4 block">Questions We Get A Lot</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-graphite">
            Let's clear things up
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-card fade-up-section"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
              >
                <span className="font-display font-medium text-graphite pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-primary" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
