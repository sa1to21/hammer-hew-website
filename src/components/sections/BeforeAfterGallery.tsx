import { useState } from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';
import AnimatedCard from '../ui/AnimatedCard';

interface BeforeAfterProject {
  id: number;
  title: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
  year: string;
  materials: string[];
}

const BeforeAfterGallery: React.FC = () => {

  const projects: BeforeAfterProject[] = [
    {
      id: 1,
      title: "Complete Deck Restoration",
      location: "Bay Area, CA",
      description: "Professional deck restoration bringing new life to weathered decking with expert craftsmanship",
      beforeImage: "/images/before-after/restoration/restoration-001-before.jpg",
      afterImage: "/images/before-after/restoration/restoration-001-after.jpg",
      category: "restoration",
      year: "2024",
      materials: ["Premium Stain", "Weather Seal", "Board Replacement"]
    },
    {
      id: 2,
      title: "Deck Construction Project",
      location: "Bay Area, CA", 
      description: "Complete deck transformation from old structure to modern outdoor living space",
      beforeImage: "/images/before-after/construction/construction-001-before.jpg",
      afterImage: "/images/before-after/construction/construction-001-after.jpg",
      category: "upgrade",
      year: "2024",
      materials: ["Quality Materials", "Professional Installation", "Modern Design"]
    },
    {
      id: 3,
      title: "Expert Deck Renovation",
      location: "Bay Area, CA",
      description: "Skillful restoration work transforming weathered decks into beautiful outdoor spaces",
      beforeImage: "/images/before-after/restoration/restoration-002-before.jpg",
      afterImage: "/images/before-after/restoration/restoration-002-after.jpg",
      category: "restoration",
      year: "2024", 
      materials: ["Cedar Restoration", "Premium Finish", "Professional Sealing"]
    },
    {
      id: 4,
      title: "Quality Deck Revival",
      location: "Bay Area, CA",
      description: "High-quality restoration services with lasting results and attention to detail",
      beforeImage: "/images/before-after/restoration/restoration-003-before.jpg",
      afterImage: "/images/before-after/restoration/restoration-003-after.jpg",
      category: "restoration",
      year: "2024",
      materials: ["Quality Restoration", "Expert Techniques", "Durable Materials"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'restoration', name: 'Restoration' },
    { id: 'upgrade', name: 'Construction' },
    { id: 'expansion', name: 'Expansions' },
    { id: 'luxury', name: 'Luxury' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
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
            Amazing <span className="text-green-800">Transformations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the dramatic difference our expert craftsmanship makes. 
            Drag the slider to reveal stunning before and after transformations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-green-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <AnimatedCard key={project.id} delay={index * 0.1} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3]">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  className="w-full h-full"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {project.location} • {project.year}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.category === 'restoration' ? 'bg-blue-100 text-blue-800' :
                    project.category === 'upgrade' ? 'bg-green-100 text-green-800' :
                    project.category === 'expansion' ? 'bg-purple-100 text-purple-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Materials Used */}
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((material, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-green-800 text-white rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-heading mb-4">
            Ready for Your Amazing Transformation?
          </h3>
          <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
            Let us create a stunning before and after story for your deck. 
            Get your free consultation and 3D design mockup today.
          </p>
          <motion.button 
            className="bg-white text-green-800 font-semibold px-8 py-4 rounded-lg hover:bg-green-50 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Transformation Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;