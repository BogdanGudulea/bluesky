import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-pattern">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-electric-purple/20 to-teal/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-coral/20 to-electric-purple/20 transform rotate-45 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-teal/20 to-coral/20 rounded-full animate-pulse-slow"></div>
        
        {/* Interactive cursor follower */}
        <div 
          className="absolute w-6 h-6 bg-electric-purple/30 rounded-full pointer-events-none animate-pulse-slow"
          style={{
            transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-electric-purple/10 border border-electric-purple/30 rounded-full text-electric-purple font-semibold text-sm mb-4">
                🚀 Premier QA & Marketing Agency
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">Transform</span><br />
              <span className="text-white">Your Digital</span><br />
              <span className="glitch" data-text="Excellence">Excellence</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              From cutting-edge <span className="text-teal font-semibold">quality assurance</span> to 
              revolutionary <span className="text-coral font-semibold">marketing strategies</span> - 
              we craft digital experiences that dominate markets. Led by a <span className="text-electric-purple font-semibold">veteran manual tester with 20+ years of experience</span>.
            </motion.p>

            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#services"
                className="bg-gradient-to-r from-electric-purple to-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-electric-purple/50 transition-all duration-300 hover-lift neon-glow"
              >
                Explore Services ⚡
              </a>
              <a
                href="#portfolio"
                className="border-2 border-electric-purple text-electric-purple px-8 py-4 rounded-full font-bold text-lg hover:bg-electric-purple hover:text-white transition-all duration-300 hover-lift"
              >
                View Portfolio
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="mt-12 grid grid-cols-3 gap-6 text-center"
            >
              <div>
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400 text-sm">Expert Support</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants} 
            className="relative"
          >
            <div className="relative group">
              {/* Main hero image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1543331858-d844b6d0234e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMHRlc3Rpbmd8ZW58MHx8fHB1cnBsZXwxNzUzNDQxOTQ2fDA&ixlib=rb-4.1.0&q=85"
                  alt="Professional Development Environment"
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-electric-purple/20 via-transparent to-teal/20"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-coral to-electric-purple rounded-2xl rotate-12 animate-float shadow-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-teal to-coral rounded-full animate-bounce-slow shadow-lg"></div>
              
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-purple via-teal to-coral rounded-2xl opacity-30 blur animate-pulse-slow"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-electric-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-purple rounded-full mt-2 animate-bounce"></div>
        </div>
        <div className="text-xs text-gray-400 mt-2 text-center">Scroll</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;