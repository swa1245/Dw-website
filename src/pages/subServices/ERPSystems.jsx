import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './SubServices.css';

const ERPSystems = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const solutions = [
    {
      title: 'Financial Management',
      description: 'Comprehensive financial management and accounting solutions.',
      icon: '💰',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
      features: [
        'General ledger',
        'Accounts payable/receivable',
        'Asset management',
        'Financial reporting'
      ]
    },
    {
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain visibility and optimization.',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070',
      features: [
        'Inventory management',
        'Procurement',
        'Order processing',
        'Supplier management'
      ]
    },
    {
      title: 'Human Resources',
      description: 'Complete HR management and employee lifecycle solutions.',
      icon: '👥',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070',
      features: [
        'Payroll management',
        'Recruitment',
        'Performance management',
        'Training & development'
      ]
    },
    {
      title: 'Manufacturing',
      description: 'Streamlined manufacturing operations and resource planning.',
      icon: '🏭',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
      features: [
        'Production planning',
        'Quality control',
        'Equipment maintenance',
        'Cost tracking'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline workflows',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074'
    },
    {
      title: 'Data Integration',
      description: 'Centralized data management and real-time insights',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs and improve efficiency',
      icon: '💰',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072'
    },
    {
      title: 'Scalability',
      description: 'Grow your business with flexible and scalable solutions',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015'
    }
  ];

  const tools = [
    { name: 'SAP', icon: '💼' },
    { name: 'Oracle', icon: '🔮' },
    { name: 'Microsoft Dynamics', icon: '🪟' },
    { name: 'Salesforce', icon: '☁️' },
    { name: 'Odoo', icon: '🔧' },
    { name: 'NetSuite', icon: '🌐' }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
            alt="ERP Systems"
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
            ERP & CRM Systems
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Integrated enterprise solutions that streamline your business operations and drive growth.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-dark-800/50 backdrop-blur-sm rounded-full border border-dark-700"
              >
                <span className="text-xl mr-2">{tool.icon}</span>
                <span className="font-medium">{tool.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/90"></div>
      </motion.div>

      {/* Solutions Section */}
      <section className="py-20 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-orange-500 font-bold text-center mb-16" data-aos="fade-up">
            ERP Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="group relative bg-dark-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{solution.icon}</span>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3">
                    {solution.features.map((feature, i) => (
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

      {/* Benefits Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-orange-500 font-bold text-center mb-16" data-aos="fade-up">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-dark-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-40">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
                </div>
                
                <div className="p-6 text-center">
                  <span className="text-3xl mb-4 block">{benefit.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* CTA Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our ERP solutions can streamline your operations.
            </p>
            <Link to="/contact">
              <motion.button 
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section> */}
      <section className="cta-section w-screen mt-11 py-20">
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

export default ERPSystems;
