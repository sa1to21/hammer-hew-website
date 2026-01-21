import { motion } from 'framer-motion';
import TestimonialCarousel from '../ui/TestimonialCarousel';
import { Star, Users, Award } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ethan Walker",
      location: "Philadelphia, PA",
      rating: 5,
      text: "The crew rebuilt and painted the deck, and it turned out solid. The boards are straight, the finish is clean, and the space looks way better than before. Good job done right.",
      project: "Complete Deck Restoration",
      date: "2024-08"
    },
    {
      id: 2,
      name: "Ales O'Reilly",
      location: "Philadelphia, PA", 
      rating: 5,
      text: "Our deck looks years younger. Konstantin restored the wood’s color, sealed it well, and finished right on schedule. Professional and dependable. Highly recommend Hammer & Hew.",
      project: "Cedar Deck Restoration & Staining",
      date: "2024-07"
    },
    {
      id: 3,
      name: "Kristen Boone",
      location: "Philadelphia, PA",
      rating: 5,
      text: "I had a wonderful experience with Hammer and Hew. They were very easy to communicate with, very skilled with their work and super respectful of my property. They installed a 6 ft privacy fence on my deck. They came on time, were easy to get scheduled, and offered a fair price for the scope of work. They did a great job and were clean in the process of everything! I have confidence in the work as we have been having really heavy winds after the installation. I was provided with their license and insurance documents before work began to insure their legitimacy. I would absolutely recommend them to anyone looking to have work done on your deck.",
      project: "Deck Privacy Fence Installation",
      date: "2024-10"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Chester, PA",
      rating: 5,
      text: "The team was incredibly clean and respectful of our property. They worked around our schedule and delivered exactly what was promised. Three months later, the deck still looks brand new!",
      project: "Luxury Resort-Style Deck",
      date: "2024-05"
    },
    {
      id: 5,
      name: "Lisa Williams",
      location: "Broomall, PA",
      rating: 5,
      text: "Best investment we've made in our home! The before and after difference is incredible. Friends and neighbors constantly ask who did our deck. We couldn't be happier with the quality and service.",
      project: "Cedar Deck Restoration & Staining",
      date: "2024-09"
    }
  ];


  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 via-white to-amber-50 border-b border-slate-200/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading text-gray-800 mb-6">
            What Our <span className="text-green-800">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Read what our customers say about 
            their deck transformation experience with Hammer & Hew.
          </p>
        </motion.div>


        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TestimonialCarousel testimonials={testimonials} />
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-gray-600 font-medium">Google Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600 font-medium">Thumbtack Pro</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-600" />
              <span className="text-gray-600 font-medium">Yelp Reviews</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;