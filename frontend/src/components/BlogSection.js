import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts', color: 'electric-purple', icon: '📚' },
    { id: 'qa', label: 'Quality Assurance', color: 'teal', icon: '🔍' },
    { id: 'marketing', label: 'Digital Marketing', color: 'coral', icon: '📈' },
    { id: 'automation', label: 'Test Automation', color: 'electric-purple', icon: '🤖' },
    { id: 'trends', label: 'Industry Trends', color: 'teal', icon: '🚀' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Test Automation: AI-Powered Testing Strategies",
      excerpt: "Discover how artificial intelligence is revolutionizing test automation and what it means for QA professionals.",
      category: 'automation',
      author: "Sarah Chen",
      date: "December 20, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1585384107568-5bc588c7eefd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3Rpbmc",
      tags: ["AI", "Automation", "Testing", "Innovation"]
    },
    {
      id: 2,
      title: "Digital Marketing ROI: Measuring Success in 2024",
      excerpt: "Learn the key metrics and strategies that top marketers use to maximize their digital marketing return on investment.",
      category: 'marketing',
      author: "Michael Rodriguez",
      date: "December 18, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwbWFya2V0aW5n",
      tags: ["ROI", "Analytics", "Digital Marketing", "Strategy"]
    },
    {
      id: 3,
      title: "Mobile App Testing: Best Practices for 2024",
      excerpt: "Essential guidelines and methodologies for ensuring your mobile applications deliver exceptional user experiences.",
      category: 'qa',
      author: "Emma Thompson",
      date: "December 15, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1543331858-d844b6d0234e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMHRlc3Rpbmc",
      tags: ["Mobile Testing", "QA", "User Experience", "Best Practices"]
    },
    {
      id: 4,
      title: "Social Media Trends That Will Dominate 2024",
      excerpt: "Stay ahead of the curve with the latest social media trends and strategies that are reshaping digital marketing.",
      category: 'trends',
      author: "Alex Kim",
      date: "December 12, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwbWFya2V0aW5n",
      tags: ["Social Media", "Trends", "Marketing", "2024"]
    },
    {
      id: 5,
      title: "API Testing Fundamentals: A Complete Guide",
      excerpt: "Master the essentials of API testing with our comprehensive guide covering tools, techniques, and best practices.",
      category: 'qa',
      author: "David Park",
      date: "December 10, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1660644807802-497b674c6ac2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMHRlc3Rpbmc",
      tags: ["API Testing", "QA", "Tools", "Guide"]
    },
    {
      id: 6,
      title: "Content Marketing Strategies for B2B Success",
      excerpt: "Unlock the power of content marketing with proven strategies that drive engagement and generate quality leads.",
      category: 'marketing',
      author: "Lisa Wong",
      date: "December 8, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1491951931722-5a446214b4e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5n",
      tags: ["Content Marketing", "B2B", "Lead Generation", "Strategy"]
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'electric-purple';
  };

  const getColorClasses = (color) => {
    const colorMap = {
      'electric-purple': 'bg-electric-purple/20 border-electric-purple/30 text-electric-purple',
      'teal': 'bg-teal/20 border-teal/30 text-teal',
      'coral': 'bg-coral/20 border-coral/30 text-coral'
    };
    return colorMap[color] || colorMap['electric-purple'];
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-electric-purple/10 to-teal/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-coral/10 to-electric-purple/10 transform rotate-45 animate-pulse-slow"></div>

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
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our experts in QA and digital marketing
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                selectedCategory === category.id
                  ? `bg-${category.color} border-${category.color} text-white`
                  : `${getColorClasses(category.color)} hover:bg-${category.color}/10`
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover-lift transition-all duration-500 hover:border-electric-purple/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${
                  getColorClasses(getCategoryColor(post.category))
                }`}>
                  {categories.find(cat => cat.id === post.category)?.icon} {post.category.toUpperCase()}
                </div>

                {/* Read Time */}
                <div className="absolute top-4 right-4 bg-dark-card/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-gray-300">
                  {post.readTime}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Post Meta */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-electric-purple transition-colors line-clamp-2">
                  <a href="#" className="hover:underline">
                    {post.title}
                  </a>
                </h3>

                {/* Post Excerpt */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-dark-bg text-xs text-gray-400 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-dark-bg text-xs text-gray-400 rounded-md">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Read More Link */}
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-electric-purple font-semibold hover:text-teal transition-colors text-sm group-hover:underline"
                  >
                    Read More →
                  </a>
                  
                  {/* Social Share */}
                  <div className="flex space-x-2">
                    <button className="w-6 h-6 rounded-full bg-electric-purple/20 text-electric-purple flex items-center justify-center text-xs hover:bg-electric-purple hover:text-white transition-colors">
                      📱
                    </button>
                    <button className="w-6 h-6 rounded-full bg-teal/20 text-teal flex items-center justify-center text-xs hover:bg-teal hover:text-white transition-colors">
                      🔗
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-electric-purple to-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-electric-purple/50 transition-all duration-300 hover-lift">
            Load More Articles
          </button>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          className="mt-20 bg-dark-card border border-dark-border rounded-3xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/5 via-teal/5 to-coral/5"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-4">
              Stay <span className="gradient-text">Informed</span>
            </h3>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter and get the latest insights delivered directly to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-dark-bg border border-dark-border rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-electric-purple"
              />
              <button className="bg-gradient-to-r from-electric-purple to-teal text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-electric-purple/50 transition-all duration-300">
                Subscribe
              </button>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;