import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do I need a permit to build a deck in Philadelphia?",
    answer: "Yes, most deck projects in Philadelphia require a building permit. We handle the entire permitting process for you, including drawing up plans and submitting them to the Department of Licenses and Inspections. This ensures your deck is code-compliant and safe."
  },
  {
    question: "How long does it take to build a new deck?",
    answer: "The timeline for each project is unique and depends on several factors, including the size and complexity of the design, the time required for permit approvals from the city, and current weather conditions. We handle all administrative and construction phases and provide a personalized schedule during your initial consultation to ensure clear expectations."
  },
  {
    question: "Can you replace deck boards without replacing the structure?",
    answer: "In many cases, yes. This is called 'redecking.' If the underlying structural frame (joists and beams) is in good condition, we can save you money by simply replacing the old surface boards and railings with new materials."
  },
  {
    question: "What is the difference between composite and wood decking?",
    answer: "Wood (like pressure-treated pine or cedar) is more affordable upfront but requires annual maintenance like staining and sealing. Composite decking is a blend of wood fibers and plastic; it costs more initially but is virtually maintenance-free, rot-resistant, and lasts 25+ years."
  },
  {
    question: "Do you work in winter?",
    answer: "Yes, we build decks year-round! While extreme weather can cause minor delays, winter is actually a great time to build. It often means shorter wait times for permits and materials, ensuring your deck is ready to enjoy by the first warm day of spring."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Structured Data for Google Rich Results (FAQPage)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-green-50 via-white to-amber-50">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading text-gray-800 mb-4">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about deck construction, permits, and materials.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-semibold text-gray-800 text-left pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  activeIndex === index ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-500'
                }`}>
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-4 border-l-4 border-emerald-500 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
