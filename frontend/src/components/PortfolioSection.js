import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Testing Revolution",
      category: "qa",
      client: "RetailGiant",
      description: "Comprehensive testing framework reducing bugs by 95%",
      image: "https://images.unsplash.com/photo-1585384107568-5bc588c7eefd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3Rpbmd8ZW58MHx8fHB1cnBsZXwxNzUzNDQxOTQ2fDA&ixlib=rb-4.1.0&q=85",
      results: ["95% Bug Reduction", "70% Faster Delivery", "99.9% Uptime"],
      technologies: ["Selenium", "Cypress", "Jest", "Docker"]
    },
    {
      id: 2,
      title: "SaaS Platform Marketing Domination",
      category: "marketing",
      client: "CloudTech Solutions",
      description: "Multi-channel campaign generating 500% ROI",
      image: "https://images.unsplash.com/photo-1491951931722-5a446214b4e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHxwdXJwbGV8MTc1MzQ0MTk1M3ww&ixlib=rb-4.1.0&q=85",
      results: ["500% ROI", "300% Lead Increase", "250% Conversion Rate"],
      technologies: ["Google Ads", "HubSpot", "Analytics", "A/B Testing"]
    },
    {
      id: 3,
      title: "Mobile App Quality Excellence",
      category: "qa",
      client: "StartupLabs",
      description: "End-to-end mobile testing ensuring perfect user experience",
      image: "https://images.unsplash.com/photo-1543331858-d844b6d0234e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMHRlc3Rpbmd8ZW58MHx8fHB1cnBsZXwxNzUzNDQxOTQ2fDA&ixlib=rb-4.1.0&q=85",
      results: ["4.9★ App Rating", "0.1% Crash Rate", "50% Performance Boost"],
      technologies: ["Appium", "XCTest", "Espresso", "Firebase"]
    },
    {
      id: 4,
      title: "B2B Lead Generation Mastery",
      category: "marketing",
      client: "EnterpriseCorp",
      description: "Strategic B2B campaign targeting enterprise clients",
      image: "https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHxwdXJwbGV8MTc1MzQ0MTk1M3ww&ixlib=rb-4.1.0&q=85",
      results: ["400% Qualified Leads", "$2M Pipeline", "35% Close Rate"],
      technologies: ["LinkedIn Ads", "Salesforce", "Pardot", "Content Marketing"]
    },
    {
      id: 5,
      title: "API Testing Infrastructure",
      category: "qa",
      client: "TechInnovate",
      description: "Robust API testing framework for microservices architecture",
      image: "https://images.unsplash.com/photo-1660644807802-497b674c6ac2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMHRlc3Rpbmc",
      results: ["100% API Coverage", "99.99% Reliability", "80% Faster Testing"],
      technologies: ["Postman", "Newman", "Jest", "CI/CD"]
    },
    {
      id: 6,
      title: "Social Media Brand Transformation",
      category: "marketing",
      client: "BrandEvolution",
      description: "Complete social media strategy and brand positioning",
      image: "https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHxwdXJwbGV8MTc1MzQ0MTk1M3ww&ixlib=rb-4.1.0&q=85",
      results: ["800% Engagement", "600% Followers", "450% Brand Reach"],
      technologies: ["Hootsuite", "Canva", "Analytics", "Influencer Platform"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: '🚀' },
    { id: 'qa', label: 'Quality Assurance', icon: '🔍' },
    { id: 'marketing', label: 'Digital Marketing', icon: '📈' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-grid opacity-5"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-electric-purple/10 to-teal/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-coral/10 to-electric-purple/10 transform rotate-45 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-display font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve extraordinary results through our innovative solutions
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-electric-purple to-teal text-white shadow-lg'
                  : 'bg-dark-card text-gray-400 hover:text-white border border-dark-border hover:border-electric-purple/50'
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-dark-card rounded-2xl overflow-hidden border border-dark-border hover-lift transition-all duration-500 group-hover:border-electric-purple/50">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'qa' 
                      ? 'bg-teal/20 text-teal border border-teal/30' 
                      : 'bg-coral/20 text-coral border border-coral/30'
                  }`}>
                    {project.category.toUpperCase()}
                  </div>

                  {/* Hover Overlay */}
                  {hoveredProject === project.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-electric-purple/95 via-electric-purple/80 to-teal/60 flex items-center justify-center p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center text-white">
                        <h4 className="font-bold text-lg mb-4">Key Results</h4>
                        <div className="space-y-2">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="text-sm font-semibold">
                              ✓ {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-gray-400">{project.client}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-electric-purple transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-dark-bg text-xs text-gray-400 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-dark-bg text-xs text-gray-400 rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex justify-between items-center">
                    <a
                      href="#contact"
                      className="text-electric-purple font-semibold hover:text-teal transition-colors text-sm"
                    >
                      View Case Study →
                    </a>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-electric-purple rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-teal rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-coral rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-dark-card border border-dark-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/5 via-teal/5 to-coral/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold mb-4">
                Ready to Create Your <span className="gradient-text">Success Story</span>?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the ranks of industry leaders who've transformed their businesses with our innovative solutions
              </p>
              <a
                href="#contact"
                className="bg-gradient-to-r from-electric-purple to-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-electric-purple/50 transition-all duration-300 hover-lift neon-glow"
              >
                Start Your Project Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;