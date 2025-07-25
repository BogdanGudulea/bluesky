import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Manual Testing', href: '#services' },
        { name: 'Test Automation', href: '#services' },
        { name: 'Quality Management', href: '#services' },
        { name: 'Digital Marketing', href: '#services' },
        { name: 'Social Media', href: '#services' },
        { name: 'Campaign Management', href: '#services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#hero' },
        { name: 'Our Process', href: '#process' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Careers', href: '#contact' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#blog' },
        { name: 'Case Studies', href: '#portfolio' },
        { name: 'Whitepapers', href: '#blog' },
        { name: 'Industry Reports', href: '#blog' },
        { name: 'Best Practices', href: '#blog' },
        { name: 'Tools & Resources', href: '#blog' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#contact' },
        { name: 'Documentation', href: '#blog' },
        { name: 'API Reference', href: '#contact' },
        { name: 'Community', href: '#contact' },
        { name: 'Status Page', href: '#contact' },
        { name: 'Contact Support', href: '#contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'electric-purple' },
    { name: 'Twitter', icon: '🐦', href: '#', color: 'teal' },
    { name: 'Facebook', icon: '📘', href: '#', color: 'coral' },
    { name: 'Instagram', icon: '📷', href: '#', color: 'electric-purple' },
    { name: 'YouTube', icon: '📺', href: '#', color: 'teal' },
    { name: 'GitHub', icon: '🔗', href: '#', color: 'coral' }
  ];

  const certifications = [
    { name: 'ISO 27001', icon: '🔒' },
    { name: 'ISTQB', icon: '✅' },
    { name: 'Google Partner', icon: '🎯' },
    { name: 'AWS Certified', icon: '☁️' }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'electric-purple': 'text-electric-purple hover:text-electric-purple-light',
      'teal': 'text-teal hover:text-teal-light',
      'coral': 'text-coral hover:text-coral-light'
    };
    return colorMap[color] || colorMap['electric-purple'];
  };

  return (
    <footer className="bg-dark-card border-t border-dark-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-electric-purple/5 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-teal/5 to-transparent rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-display font-bold gradient-text mb-4">
                  BlueSky
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transforming businesses through excellence in quality assurance and innovative marketing strategies.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="mr-3">📧</span>
                  <a href="mailto:hello@blueskyagency.com" className="hover:text-electric-purple transition-colors">
                    hello@blueskyagency.com
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="mr-3">📞</span>
                  <a href="tel:+15551234567" className="hover:text-electric-purple transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="mr-3">📍</span>
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-semibold text-white mb-3">Certifications</h4>
                <div className="grid grid-cols-2 gap-2">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-dark-bg px-2 py-1 rounded text-xs text-gray-400"
                    >
                      <span className="mr-1">{cert.icon}</span>
                      {cert.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-white mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-electric-purple transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          className="py-8 border-t border-dark-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="font-bold text-xl text-white mb-4">
              Stay Updated with <span className="gradient-text">Industry Insights</span>
            </h4>
            <p className="text-gray-400 mb-6">
              Get the latest trends, tips, and insights delivered to your inbox monthly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-dark-bg border border-dark-border rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-electric-purple transition-colors"
              />
              <button className="bg-gradient-to-r from-electric-purple to-teal text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-electric-purple/50 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-dark-border">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} BlueSky Agency. All rights reserved. Crafted with ❤️ for digital excellence.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center transition-all duration-300 hover-lift ${getColorClasses(social.color)} hover:border-current hover:shadow-lg`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-electric-purple transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-purple transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-purple transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.div
          className="absolute bottom-8 right-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-gradient-to-r from-electric-purple to-teal rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-electric-purple/50 transition-all duration-300 hover-lift"
            title="Back to top"
          >
            ↑
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;