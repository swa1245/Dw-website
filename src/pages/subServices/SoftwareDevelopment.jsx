import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SubServices.css';

const SoftwareDevelopment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed to meet your specific business requirements.',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1542744095-08cf8e431dbb?w=2070&auto=format&fit=crop&q=60',


      features: [
        'Scalable architecture',
        'Modern tech stack',
        'Security best practices',
        'Performance optimization'
      ]
    },
    {
      title: 'Enterprise Solutions',
      description: 'Robust enterprise-grade applications that streamline business operations.',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
      features: [
        'System integration',
        'Workflow automation',
        'Data analytics',
        'Legacy system modernization'
      ]
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud-native applications with high availability and scalability.',
      icon: '☁️',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
      features: [
        'Multi-cloud support',
        'Microservices architecture',
        'Auto-scaling',
        'Disaster recovery'
      ]
    }
  ];

  // const technologies = [
  //   { name: 'Python', icon: '🐍' },
  //   { name: 'Java', icon: '☕' },
  //   { name: 'JavaScript', icon: '🟨' },
  //   { name: 'React', icon: '⚛️' },
  //   { name: 'Node.js', icon: '🟢' },
  //   { name: 'AWS', icon: '☁️' },
  // ];

  const methodologies = [
    {
      name: 'Agile Development',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      description: 'Iterative approach with regular feedback and adaptability',
      features: [
        'Sprint planning',
        'Daily standups',
        'Regular demos',
        'Continuous improvement'
      ]
    },
    {
      name: 'DevOps Practices',
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=2070',
      description: 'Seamless integration of development and operations',
      features: [
        'CI/CD pipelines',
        'Automated testing',
        'Infrastructure as code',
        'Monitoring & logging'
      ]
    },
    {
      name: 'Quality Assurance',
      icon: '✅',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
      description: 'Comprehensive testing and quality control',
      features: [
        'Unit testing',
        'Integration testing',
        'Performance testing',
        'Security testing'
      ]
    }
  ];

  return (
    <div className="min-h-screen w-screen w-full bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070"
            alt="Software Development"
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
            Software Development
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Building scalable, secure, and efficient software solutions that drive business growth and innovation.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* {technologies.map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-dark-800/50 backdrop-blur-sm rounded-full border border-dark-700"
              >
                <span className="text-xl mr-2">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))} */}
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/90"></div>
      </motion.div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-orange-500 font-bold text-center mb-16" data-aos="fade-up">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Methodologies Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-orange-500 font-bold text-center mb-16" data-aos="fade-up">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                className="bg-dark-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48">
                  <img
                    src={method.image}
                    alt={method.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{method.icon}</span>
                    <h3 className="text-2xl font-bold">{method.name}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{method.description}</p>
                  
                  <ul className="space-y-3">
                    {method.features.map((feature, i) => (
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

export default SoftwareDevelopment;
