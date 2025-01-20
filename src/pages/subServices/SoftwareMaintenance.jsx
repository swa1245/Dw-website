import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SubServices.css';

const SoftwareMaintenance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    {
      title: 'Preventive Maintenance',
      description: 'Regular system checks and updates to prevent issues before they occur.',
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      features: [
        'Performance monitoring',
        'Security updates',
        'Code optimization',
        'Database maintenance'
      ]
    },
    {
      title: 'Corrective Maintenance',
      description: 'Quick resolution of software issues and bug fixes.',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069',
      features: [
        'Bug fixing',
        'Error handling',
        'System recovery',
        'Performance tuning'
      ]
    },
    {
      title: 'Adaptive Maintenance',
      description: 'Keeping software up-to-date with changing business needs.',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974',
      features: [
        'Feature updates',
        'Platform upgrades',
        'Integration updates',
        'Compatibility maintenance'
      ]
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and issue resolution.',
      icon: '🎯',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070',
      features: [
        'Emergency response',
        'Remote support',
        'Issue tracking',
        'Regular reporting'
      ]
    }
  ];

  const features = [
    {
      title: 'Proactive Monitoring',
      description: 'Continuous system monitoring to identify and prevent issues',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070'
    },
    {
      title: 'Regular Backups',
      description: 'Automated backup systems with secure data storage',
      icon: '💾',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070'
    },
    {
      title: 'Security Updates',
      description: 'Regular security patches and vulnerability assessments',
      icon: '🔒',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070'
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous performance monitoring and optimization',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070'
    }
  ];

  const tools = [
    { name: 'Monitoring', icon: '📈' },
    { name: 'Issue Tracking', icon: '🎯' },
    { name: 'Version Control', icon: '📚' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'Testing', icon: '✅' },
    { name: 'Documentation', icon: '📝' }
  ];

  return (
    <div className="min-h-screen w-screen w-full bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.freepik.com/free-photo/programming-background-concept_23-2150170128.jpg?ga=GA1.1.402563534.1736440284&semt=ais_incoming"
            alt="Software Maintenance"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Software Maintenance
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive software maintenance services to keep your systems running smoothly and efficiently.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
          
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/90"></div>
      </motion.div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-orange-500 font-bold text-center mb-16" data-aos="fade-up">
            Our Maintenance Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-dark-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-300"
                      >
                        <svg 
                          className="w-5 h-5 mr-3 text-orange-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-orange-500 font-bold text-center mb-16" data-aos="fade-up">
            Key Features
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-dark-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-40">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
                </div>
                
                <div className="p-6 text-center">
                  <span className="text-3xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20">
              <div className="container mx-auto px-4">
                <div className="cta-content text-center">
                  <h2 className="text-4xl font-bold mb-6" data-aos="fade-down">
                    Ready to Transform Your Business?
                  </h2>
                  <p
                    className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Let's work together to bring your vision to life with our
                    innovative solutions.
                  </p>
                  <Link
                    to="/contact"
                    className="cta-button"
                    // data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Start Your Project
                    <svg
                      className="w-5 h-5 "
                      fill="none"
                      // stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        // strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
    </div>
  );
};

export default SoftwareMaintenance;
