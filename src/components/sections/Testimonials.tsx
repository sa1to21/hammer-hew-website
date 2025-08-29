import { motion } from 'framer-motion';
import TestimonialCarousel from '../ui/TestimonialCarousel';
import AnimatedCounter from '../ui/AnimatedCounter';
import { Star, Users, Award, Clock } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "San Francisco, CA",
      rating: 5,
      text: "Hammer & Hew transformed our weathered 15-year-old deck into a stunning centerpiece. The craftsmanship is exceptional, and they completed everything exactly on schedule. Our family now spends every evening out there!",
      project: "Complete Deck Restoration",
      date: "2024-08"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Palo Alto, CA", 
      rating: 5,
      text: "Professional from start to finish. They handled all permits, provided daily updates, and the final result exceeded our expectations. The new composite deck looks amazing and requires zero maintenance.",
      project: "New Composite Deck Construction",
      date: "2024-07"
    },
    {
      id: 3,
      name: "Jennifer Martinez",
      location: "San Jose, CA",
      rating: 5,
      text: "After getting quotes from 5 contractors, Hammer & Hew was clearly the most professional and detailed. Their 10-year warranty gave us complete confidence. The multi-level design is absolutely perfect.",
      project: "Multi-Level Deck Expansion",
      date: "2024-06"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Mountain View, CA",
      rating: 5,
      text: "The team was incredibly clean and respectful of our property. They worked around our schedule and delivered exactly what was promised. Three months later, the deck still looks brand new!",
      project: "Luxury Resort-Style Deck",
      date: "2024-05"
    },
    {
      id: 5,
      name: "Lisa Williams",
      location: "Menlo Park, CA",
      rating: 5,
      text: "Best investment we've made in our home! The before and after difference is incredible. Friends and neighbors constantly ask who did our deck. We couldn't be happier with the quality and service.",
      project: "Cedar Deck Restoration & Staining",
      date: "2024-09"
    }
  ];

  const stats = [
    {
      icon: Star,
      value: 4.9,
      suffix: "/5",
      label: "Average Rating",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Happy Customers",
      color: "text-green-600"
    },
    {
      icon: Award,
      value: 98,
      suffix: "%",
      label: "Satisfaction Rate",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      value: 15,
      suffix: "+",
      label: "Years Experience",
      color: "text-purple-600"
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
            Don't just take our word for it. Read what Bay Area families say about 
            their deck transformation experience with Hammer & Hew.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  <AnimatedCounter
                    from={0}
                    to={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
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
              <span className="text-gray-600 font-medium">BBB A+ Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-600" />
              <span className="text-gray-600 font-medium">Angie's List</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-heading text-gray-800 mb-4">
            Join Hundreds of Happy Customers
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Experience the same quality, professionalism, and satisfaction that our customers rave about. 
            Get your free consultation today.
          </p>
          <motion.button
            className="bg-green-800 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Estimate
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;