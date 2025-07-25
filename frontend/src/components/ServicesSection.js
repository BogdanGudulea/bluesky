import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('qa');
  const [hoveredService, setHoveredService] = useState(null);

  const qaServices = [
    {
      id: 1,
      title: "Manual Testing Excellence",
      description: "Comprehensive manual testing ensuring flawless user experiences",
      features: ["Functional Testing", "Usability Testing", "Exploratory Testing", "Regression Testing"],
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1585384107568-5bc588c7eefd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3Rpbmd8ZW58MHx8fHB1cnBsZXwxNzUzNDQxOTQ2fDA&ixlib=rb-4.1.0&q=85",
      metrics: { accuracy: "99.9%", coverage: "100%", efficiency: "300%" }
    },
    {
      id: 2,
      title: "Automation Framework",
      description: "Revolutionary automation testing for accelerated delivery",
      features: ["API Testing", "UI Automation", "Performance Testing", "CI/CD Integration"],
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1543331858-d844b6d0234e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMHRlc3Rpbmd8ZW58MHx8fHB1cnBsZXwxNzUzNDQxOTQ2fDA&ixlib=rb-4.1.0&q=85",
      metrics: { speed: "10x", coverage: "95%", roi: "400%" }
    },
    {
      id: 3,
      title: "Quality Management",
      description: "Strategic quality assurance management and consulting",
      features: ["Process Optimization", "Team Training", "Quality Metrics", "Risk Assessment"],
      icon: "📊",
      image: "https://images.unsplash.com/photo-1660644807802-497b674c6ac2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMHRlc3Rpbmd8ZW58MHx8fHB1cnBsZXwxNzUzNDQxOTQ2fDA&ixlib=rb-4.1.0&q=85",
      metrics: { improvement: "200%", satisfaction: "98%", delivery: "150%" }
    }
  ];

  const marketingServices = [
    {
      id: 1,
      title: "Digital Marketing Mastery",
      description: "Complete digital marketing solutions for explosive growth",
      features: ["SEO Optimization", "Content Marketing", "Email Campaigns", "Analytics"],
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1491951931722-5a446214b4e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHxwdXJwbGV8MTc1MzQ0MTk1M3ww&ixlib=rb-4.1.0&q=85",
      metrics: { traffic: "500%", leads: "300%", conversion: "250%" }
    },
    {
      id: 2,
      title: "Social Media Excellence",
      description: "Strategic social media management for brand domination",
      features: ["Content Creation", "Community Management", "Social Advertising", "Influencer Partnerships"],
      icon: "📱",
      image: "https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHxwdXJwbGV8MTc1MzQ0MTk1M3ww&ixlib=rb-4.1.0&q=85",
      metrics: { engagement: "400%", followers: "600%", reach: "800%" }
    },
    {
      id: 3,
      title: "Campaign Management",
      description: "Data-driven campaigns that deliver exceptional ROI",
      features: ["Campaign Strategy", "A/B Testing", "Performance Analytics", "Multi-Channel Integration"],
      icon: "📈",
      image: "https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHxwdXJwbGV8MTc1MzQ0MTk1M3ww&ixlib=rb-4.1.0&q=85",
      metrics: { roi: "350%", ctr: "15%", conversion: "28%" }
    }
  ];

  const services = activeTab === 'qa' ? qaServices : marketingServices;

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-grid opacity-10"></div>
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-electric-purple/10 to-teal/10 rounded-full animate-pulse-slow"></div>

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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge solutions that transform your business through quality excellence and marketing innovation
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-dark-card rounded-full p-2 border border-dark-border relative z-20">
            <button
              onClick={() => setActiveTab('qa')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative z-30 ${
                activeTab === 'qa'
                  ? 'bg-gradient-to-r from-electric-purple to-teal text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🔍 Quality Assurance
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative z-30 ${
                activeTab === 'marketing'
                  ? 'bg-gradient-to-r from-electric-purple to-teal text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              📈 Digital Marketing
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="bg-dark-card rounded-2xl overflow-hidden border border-dark-border hover-lift transition-all duration-500 group-hover:border-electric-purple/50">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/20 to-transparent"></div>
                  
                  {/* Service Icon */}
                  <div className="absolute top-4 right-4 text-4xl bg-dark-card/80 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                    {service.icon}
                  </div>

                  {/* Hover Overlay with Metrics */}
                  {hoveredService === service.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-electric-purple/90 to-teal/90 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center text-white p-4">
                        <h4 className="font-bold text-lg mb-4">Success Metrics</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {Object.entries(service.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="capitalize">{key}:</span>
                              <span className="font-bold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-electric-purple transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-gradient-to-r from-electric-purple to-teal rounded-full mr-2"></span>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="text-electric-purple font-semibold hover:text-teal transition-colors group-hover:underline"
                    >
                      Learn More →
                    </a>
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
          <p className="text-gray-300 mb-6 text-lg">
            Ready to transform your business with our expert services?
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-electric-purple to-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-electric-purple/50 transition-all duration-300 hover-lift neon-glow"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;