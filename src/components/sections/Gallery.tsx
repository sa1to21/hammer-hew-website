import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';

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
  const [activeFilter, setActiveFilter] = useState('all');

  // Real project images from uploaded photos
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Modern Composite Deck",
      category: "new-construction",
      location: "Bay Area, CA",
      description: "Custom composite deck construction with premium materials and expert craftsmanship",
      imageUrl: "/images/gallery/new-construction/new-001.jpg",
      tags: ["Composite", "Modern", "New Construction"]
    },
    {
      id: 2,
      title: "Elegant New Construction",
      category: "new-construction", 
      location: "Bay Area, CA",
      description: "Beautiful new deck build with attention to detail and quality materials",
      imageUrl: "/images/gallery/new-construction/new-002.jpg",
      tags: ["New Build", "Elegant", "Quality"]
    },
    {
      id: 3,
      title: "Professional Deck Restoration",
      category: "restoration",
      location: "Bay Area, CA", 
      description: "Complete deck restoration bringing new life to weathered decking",
      imageUrl: "/images/gallery/restoration/restoration-001.jpg",
      tags: ["Restoration", "Professional", "Renewal"]
    },
    {
      id: 4,
      title: "Expert Deck Renovation",
      category: "restoration",
      location: "Bay Area, CA",
      description: "Skillful restoration work transforming old decks into beautiful spaces",
      imageUrl: "/images/gallery/restoration/restoration-002.jpg",
      tags: ["Renovation", "Expert", "Transformation"]
    },
    {
      id: 5,
      title: "Quality Deck Restoration",
      category: "restoration",
      location: "Bay Area, CA",
      description: "High-quality restoration services with lasting results",
      imageUrl: "/images/gallery/restoration/restoration-003.jpg",
      tags: ["Quality", "Restoration", "Lasting"]
    },
    {
      id: 6,
      title: "Premium Deck Restoration",
      category: "restoration",
      location: "Bay Area, CA",
      description: "Premium restoration work showcasing our commitment to excellence",
      imageUrl: "/images/gallery/restoration/restoration-004.jpg",
      tags: ["Premium", "Excellence", "Commitment"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: galleryItems.length },
    { id: 'new-construction', label: 'New Construction', count: galleryItems.filter(item => item.category === 'new-construction').length },
    { id: 'restoration', label: 'Restoration', count: galleryItems.filter(item => item.category === 'restoration').length },
    { id: 'staining', label: 'Staining', count: galleryItems.filter(item => item.category === 'staining').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

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

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-stone-100 shadow-sm'
              }`}
            >
              <span className="flex items-center space-x-1">
                <Filter className="w-4 h-4" />
                <span>{category.label}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredItems.map((item, index) => (
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
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === item.category)?.label || item.category}
                  </span>
                </div>
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
            Ready to see your deck transformation? Let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Schedule Consultation
            </button>
            <button className="btn-secondary">
              Get Free Estimate
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;