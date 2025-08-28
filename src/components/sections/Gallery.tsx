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

  // Temporary placeholder data - in real app, these would be actual project images
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Modern Composite Deck",
      category: "new-construction",
      location: "Palo Alto, CA",
      description: "Custom 400 sq ft composite deck with built-in seating and lighting",
      imageUrl: "https://via.placeholder.com/400x300/2D5016/FFFFFF?text=Modern+Composite+Deck",
      tags: ["Composite", "Modern", "Lighting"]
    },
    {
      id: 2,
      title: "Cedar Deck Restoration",
      category: "restoration",
      location: "San Jose, CA",
      description: "Complete restoration of 20-year old cedar deck with new staining",
      imageUrl: "https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Cedar+Restoration",
      tags: ["Cedar", "Restoration", "Staining"]
    },
    {
      id: 3,
      title: "Multi-Level Redwood Deck",
      category: "new-construction",
      location: "Mountain View, CA",
      description: "Two-level redwood deck with pergola and outdoor kitchen prep area",
      imageUrl: "https://via.placeholder.com/400x300/A0522D/FFFFFF?text=Multi-Level+Redwood",
      tags: ["Redwood", "Multi-Level", "Pergola"]
    },
    {
      id: 4,
      title: "Deck Staining Project",
      category: "staining",
      location: "Fremont, CA",
      description: "Premium semi-transparent stain application on existing deck",
      imageUrl: "https://via.placeholder.com/400x300/D2691E/FFFFFF?text=Staining+Project",
      tags: ["Staining", "Maintenance", "Protection"]
    },
    {
      id: 5,
      title: "Composite Deck with Privacy Screen",
      category: "new-construction",
      location: "Sunnyvale, CA",
      description: "Low-maintenance composite deck with integrated privacy screening",
      imageUrl: "https://via.placeholder.com/400x300/2D5016/FFFFFF?text=Privacy+Screen+Deck",
      tags: ["Composite", "Privacy", "Low-Maintenance"]
    },
    {
      id: 6,
      title: "Weathered Deck Revival",
      category: "restoration",
      location: "Santa Clara, CA",
      description: "Complete deck rehabilitation from weathered to wonderful",
      imageUrl: "https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Deck+Revival",
      tags: ["Restoration", "Weathered", "Revival"]
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
    <section className="py-20 bg-gray-50">
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
            Our <span className="text-green-800">Work</span>
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
                  ? 'bg-green-800 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
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
                <p className="text-sm text-green-800 font-medium mb-2">
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