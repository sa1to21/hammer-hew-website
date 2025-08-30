import React from 'react';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const Gallery: React.FC = () => {

  // Real project images from uploaded photos
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Modern Composite Deck",
      category: "new-construction",
      location: "Philadelphia, PA",
      description: "Custom composite deck construction with premium materials and expert craftsmanship",
      imageUrl: "/images/gallery/new-construction/new-001.jpg",
      tags: ["Composite", "Modern", "New Construction"]
    },
    {
      id: 2,
      title: "Elegant New Construction",
      category: "new-construction", 
      location: "Philadelphia, PA",
      description: "Beautiful new deck build with attention to detail and quality materials",
      imageUrl: "/images/gallery/new-construction/new-002.jpg",
      tags: ["New Build", "Elegant", "Quality"]
    },
    {
      id: 3,
      title: "Professional Deck Restoration",
      category: "restoration",
      location: "Camden, NJ", 
      description: "Complete deck restoration bringing new life to weathered decking",
      imageUrl: "/images/gallery/restoration/restoration-001.jpg",
      tags: ["Restoration", "Professional", "Renewal"]
    },
    {
      id: 4,
      title: "Expert Deck Renovation",
      category: "restoration",
      location: "Philadelphia, PA",
      description: "Skillful restoration work transforming old decks into beautiful spaces",
      imageUrl: "/images/gallery/restoration/restoration-002.jpg",
      tags: ["Renovation", "Expert", "Transformation"]
    },
    {
      id: 5,
      title: "Quality Deck Restoration",
      category: "restoration",
      location: "Chester, PA",
      description: "High-quality restoration services with lasting results",
      imageUrl: "/images/gallery/restoration/restoration-003.jpg",
      tags: ["Quality", "Restoration", "Lasting"]
    },
    {
      id: 6,
      title: "Premium Deck Restoration",
      category: "restoration",
      location: "Philadelphia, PA",
      description: "Premium restoration work showcasing our commitment to excellence",
      imageUrl: "/images/gallery/restoration/restoration-004.jpg",
      tags: ["Premium", "Excellence", "Commitment"]
    }
  ];


  return (
    <section id="gallery" className="py-20 bg-white border-b border-slate-200/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading text-gray-800 mb-6">
            Our <span className="text-emerald-600">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every deck tells a story. Here are some of our recent transformations 
            that have brought families together in beautiful outdoor spaces.
          </p>
        </motion.div>


        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-emerald-600 font-medium mb-2">
                  {item.location}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Have questions about your deck project? We'd love to help answer them!
          </p>
          <div className="flex justify-center">
            <button 
              className="btn-primary"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;