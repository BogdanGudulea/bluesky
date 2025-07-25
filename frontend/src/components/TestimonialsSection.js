import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    satisfaction: 0,
    growth: 0,
    awards: 0
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CTO",
      content: "BlueSky transformed our QA process completely. Their automation framework reduced our testing time by 70% while increasing quality. The team's expertise is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1660644807802-497b674c6ac2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMHRlc3Rpbmd8ZW58MHx8fHB1cnBsZXwxNzUzNDQxOTQ2fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "GrowthCorp",
      role: "Marketing Director",
      content: "The digital marketing strategies from BlueSky increased our lead generation by 300% in just 6 months. Their data-driven approach delivers real results.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1660644807802-497b674c6ac2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMHRlc3Rpbmc"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      company: "InnovateLabs",
      role: "Founder & CEO",
      content: "BlueSky's comprehensive approach to quality assurance and marketing gave us the competitive edge we needed. They're true partners in our success.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1660644807802-497b674c6ac2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMHRlc3Rpbmc"
    }
  ];

  const metrics = [
    { label: "Projects Delivered", value: 500, suffix: "+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Average Growth", value: 250, suffix: "%" },
    { label: "Industry Awards", value: 15, suffix: "" }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Animate numbers when component comes into view
  useEffect(() => {
    const animateNumbers = () => {
      metrics.forEach((metric, index) => {
        let start = 0;
        const end = metric.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setAnimatedNumbers(prev => ({
            ...prev,
            [['projects', 'satisfaction', 'growth', 'awards'][index]]: Math.floor(start)
          }));
        }, 16);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateNumbers();
      }
    }, { threshold: 0.5 });

    const element = document.getElementById('testimonials-metrics');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-dark-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-coral/10 to-electric-purple/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-teal/10 to-coral/10 transform rotate-45 animate-bounce-slow"></div>

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
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from industry leaders who've transformed their businesses with our expertise
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              className="bg-dark-card border border-dark-border rounded-3xl p-8 md:p-12 relative overflow-hidden"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              {/* Quote decoration */}
              <div className="absolute top-8 left-8 text-6xl text-electric-purple/20 font-serif">"</div>
              
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-coral text-xl">★</span>
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                    {testimonials[currentTestimonial].content}
                  </p>
                  
                  {/* Author Info */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-electric-purple font-semibold">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
                
                {/* Author Image */}
                <div className="relative">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-electric-purple to-teal relative">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-electric-purple/20 to-teal/20"></div>
                  </div>
                  
                  {/* Floating elements around image */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-coral to-electric-purple rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-teal to-coral rounded-full animate-float"></div>
                </div>
              </div>
              
              {/* Background pattern */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-electric-purple/5 to-transparent rounded-full"></div>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-electric-purple w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated Metrics */}
        <motion.div
          id="testimonials-metrics"
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="bg-dark-card border border-dark-border rounded-2xl p-6 hover-lift hover:border-electric-purple/50 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {Object.values(animatedNumbers)[index]}{metric.suffix}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-dark-card rounded-lg px-6 py-3 text-electric-purple font-bold">TechStart</div>
            <div className="bg-dark-card rounded-lg px-6 py-3 text-teal font-bold">GrowthCorp</div>
            <div className="bg-dark-card rounded-lg px-6 py-3 text-coral font-bold">InnovateLabs</div>
            <div className="bg-dark-card rounded-lg px-6 py-3 text-electric-purple font-bold">DevForce</div>
            <div className="bg-dark-card rounded-lg px-6 py-3 text-teal font-bold">ScaleUp Inc</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;