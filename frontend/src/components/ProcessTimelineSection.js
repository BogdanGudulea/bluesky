import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProcessTimelineSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [inView, setInView] = useState(false);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Analysis",
      description: "Deep dive into your business needs, goals, and current challenges",
      details: [
        "Comprehensive business assessment",
        "Stakeholder interviews",
        "Technical architecture review",
        "Market analysis and competitive research"
      ],
      icon: "🔍",
      duration: "1-2 weeks",
      color: "electric-purple"
    },
    {
      id: 2,
      title: "Strategic Planning",
      description: "Develop a customized roadmap tailored to your specific requirements",
      details: [
        "Custom strategy development",
        "Resource allocation planning",
        "Timeline and milestone definition",
        "Risk assessment and mitigation"
      ],
      icon: "📋",
      duration: "1 week",
      color: "teal"
    },
    {
      id: 3,
      title: "Implementation",
      description: "Execute the plan with precision, ensuring quality at every step",
      details: [
        "Agile development methodology",
        "Continuous integration and testing",
        "Regular progress updates",
        "Quality checkpoints and reviews"
      ],
      icon: "⚡",
      duration: "4-12 weeks",
      color: "coral"
    },
    {
      id: 4,
      title: "Testing & Optimization",
      description: "Rigorous testing and refinement to ensure optimal performance",
      details: [
        "Comprehensive quality assurance",
        "Performance optimization",
        "User acceptance testing",
        "Security and compliance validation"
      ],
      icon: "🧪",
      duration: "1-2 weeks",
      color: "electric-purple"
    },
    {
      id: 5,
      title: "Launch & Support",
      description: "Successful deployment with ongoing support and maintenance",
      details: [
        "Seamless deployment process",
        "Team training and knowledge transfer",
        "24/7 monitoring and support",
        "Continuous improvement and updates"
      ],
      icon: "🚀",
      duration: "Ongoing",
      color: "teal"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (inView) {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [inView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('process-timeline');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color, variant = 'primary') => {
    const colorMap = {
      'electric-purple': {
        primary: 'bg-electric-purple border-electric-purple text-white',
        secondary: 'bg-electric-purple/20 border-electric-purple/30 text-electric-purple',
        text: 'text-electric-purple'
      },
      'teal': {
        primary: 'bg-teal border-teal text-white',
        secondary: 'bg-teal/20 border-teal/30 text-teal',
        text: 'text-teal'
      },
      'coral': {
        primary: 'bg-coral border-coral text-white',
        secondary: 'bg-coral/20 border-coral/30 text-coral',
        text: 'text-coral'
      }
    };
    return colorMap[color][variant];
  };

  return (
    <section id="process" className="py-20 relative overflow-hidden bg-dark-card/20">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-electric-purple/5 to-teal/5 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-coral/5 to-electric-purple/5 transform rotate-45 animate-float"></div>

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
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </motion.div>

        <div id="process-timeline" className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline Navigation */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-purple via-teal to-coral rounded-full opacity-30"></div>
            
            {/* Animated Progress Line */}
            <motion.div 
              className="absolute left-6 top-0 w-1 bg-gradient-to-b from-electric-purple via-teal to-coral rounded-full"
              initial={{ height: 0 }}
              animate={{ 
                height: inView ? `${((activeStep + 1) / processSteps.length) * 100}%` : 0 
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative flex items-start mb-8 cursor-pointer transition-all duration-300 ${
                  index === activeStep ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Circle */}
                <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center text-2xl z-10 transition-all duration-300 ${
                  index <= activeStep 
                    ? getColorClasses(step.color, 'primary')
                    : getColorClasses(step.color, 'secondary')
                }`}>
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className="ml-6 flex-1">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                    getColorClasses(step.color, 'secondary')
                  }`}>
                    {step.duration}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 transition-colors ${
                    index === activeStep ? getColorClasses(step.color, 'text') : 'text-white'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Step Details */}
          <div className="lg:sticky lg:top-20">
            <motion.div
              key={activeStep}
              className="bg-dark-card border border-dark-border rounded-3xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Background Pattern */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 ${
                getColorClasses(processSteps[activeStep].color, 'primary').split(' ')[0]
              }`}></div>

              {/* Step Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border ${
                  getColorClasses(processSteps[activeStep].color, 'secondary')
                }`}>
                  <span className="text-2xl">{processSteps[activeStep].icon}</span>
                  <span className="font-semibold">Step {activeStep + 1}</span>
                </div>
                
                <div className={`text-sm font-semibold ${
                  getColorClasses(processSteps[activeStep].color, 'text')
                }`}>
                  {processSteps[activeStep].duration}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-3xl font-display font-bold mb-4 text-white">
                {processSteps[activeStep].title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-lg">
                {processSteps[activeStep].description}
              </p>

              {/* Details List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white mb-4">Key Activities:</h4>
                {processSteps[activeStep].details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      getColorClasses(processSteps[activeStep].color, 'primary').split(' ')[0]
                    }`}></div>
                    <span className="text-gray-300 text-sm">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 pt-6 border-t border-dark-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Progress</span>
                  <span className={`text-sm font-semibold ${
                    getColorClasses(processSteps[activeStep].color, 'text')
                  }`}>
                    {Math.round(((activeStep + 1) / processSteps.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-dark-bg rounded-full h-2">
                  <motion.div 
                    className={`h-2 rounded-full ${
                      getColorClasses(processSteps[activeStep].color, 'primary').split(' ')[0]
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your <span className="gradient-text">Journey</span>?
          </h3>
          <p className="text-gray-300 mb-6">
            Let's discuss your project and see how our proven process can deliver exceptional results for you.
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-electric-purple to-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-electric-purple/50 transition-all duration-300 hover-lift neon-glow"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;