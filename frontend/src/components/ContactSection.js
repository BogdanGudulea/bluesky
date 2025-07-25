import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service_interest: 'qa',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL;
      await axios.post(`${backendUrl}/api/contact`, formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service_interest: 'qa',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'bogdan.gudulea@gmail.com',
      description: 'Send us an email anytime',
      color: 'electric-purple'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '(+40) 729 168 833',
      description: 'Mon-Fri from 8am to 6pm',
      color: 'teal'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Get instant support',
      color: 'coral'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'electric-purple': 'bg-electric-purple/20 border-electric-purple/30 text-electric-purple hover:bg-electric-purple/30',
      'teal': 'bg-teal/20 border-teal/30 text-teal hover:bg-teal/30',
      'coral': 'bg-coral/20 border-coral/30 text-coral hover:bg-coral/30'
    };
    return colorMap[color] || colorMap['electric-purple'];
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-grid opacity-5"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-electric-purple/5 to-teal/5 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-coral/5 to-electric-purple/5 transform rotate-45 animate-float"></div>

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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch and let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-dark-card border border-dark-border rounded-3xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tl from-electric-purple/5 to-transparent rounded-full"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                  ❌ Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-purple transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-purple transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Company and Service Interest */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-purple transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service_interest"
                      value={formData.service_interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:border-electric-purple transition-colors"
                    >
                      <option value="qa">Quality Assurance</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="both">Both QA & Marketing</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-purple transition-colors resize-none"
                    placeholder="Tell us about your project requirements and how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-electric-purple to-teal text-white hover:shadow-xl hover:shadow-electric-purple/50 hover-lift neon-glow'
                  }`}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message 🚀'}
                </button>
              </form>

              {/* Contact Info Quick Links */}
              <div className="mt-8 pt-8 border-t border-dark-border">
                <p className="text-gray-400 text-sm mb-4">Or reach out directly:</p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:bogdan.gudulea@gmail.com" className="text-electric-purple hover:text-teal transition-colors text-sm">
                    📧 bogdan.gudulea@gmail.com
                  </a>
                  <a href="tel:+40729168833" className="text-electric-purple hover:text-teal transition-colors text-sm">
                    📞 (+40) 729 168 833
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {/* Contact Methods Grid */}
            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover-lift cursor-pointer ${getColorClasses(method.color)}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{method.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-white mb-1">
                        {method.title}
                      </h4>
                      <p className="font-semibold mb-1">
                        {method.details}
                      </p>
                      <p className="text-sm text-gray-400">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div
              className="bg-dark-card border border-dark-border rounded-2xl p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-electric-purple/20 rounded-full flex items-center justify-center text-electric-purple hover:bg-electric-purple hover:text-white transition-colors">
                  📘
                </a>
                <a href="#" className="w-10 h-10 bg-teal/20 rounded-full flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors">
                  🐦
                </a>
                <a href="#" className="w-10 h-10 bg-coral/20 rounded-full flex items-center justify-center text-coral hover:bg-coral hover:text-white transition-colors">
                  📷
                </a>
                <a href="#" className="w-10 h-10 bg-electric-purple/20 rounded-full flex items-center justify-center text-electric-purple hover:bg-electric-purple hover:text-white transition-colors">
                  💼
                </a>
              </div>
            </motion.div>

            {/* FAQ Quick Links */}
            <motion.div
              className="bg-dark-card border border-dark-border rounded-2xl p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg text-white mb-4">Quick Questions?</h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-300">
                  <span className="font-semibold text-electric-purple">Q:</span> How long does a typical project take?
                </div>
                <div className="text-sm text-gray-400 mb-3">
                  <span className="font-semibold text-teal">A:</span> 4-12 weeks depending on scope and complexity.
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold text-electric-purple">Q:</span> Do you offer ongoing support?
                </div>
                <div className="text-sm text-gray-400">
                  <span className="font-semibold text-teal">A:</span> Yes, we provide 24/7 support and maintenance.
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
          <div className="bg-gradient-to-r from-electric-purple/10 via-teal/10 to-coral/10 rounded-3xl p-8 border border-dark-border">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Free Consultation</span> Available
            </h3>
            <p className="text-gray-300 mb-6">
              Not sure where to start? Book a free 30-minute consultation and let's discuss your needs.
            </p>
            <a
              href="#contact"
              className="bg-gradient-to-r from-electric-purple to-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-electric-purple/50 transition-all duration-300 hover-lift neon-glow"
            >
              Book Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;