import { useEffect } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import './SubServices.css';

import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const ITConsulting = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: 'Digital Transformation',
      description: 'Guide your organization through successful digital transformation initiatives.',
      image: 'https://img.freepik.com/free-photo/digital-transformation-concept-with-icons-devices_23-2149143925.jpg',
      features: ['Strategy Development', 'Process Optimization', 'Technology Integration']
    },
    {
      title: 'Cloud Strategy',
      description: 'Develop and implement effective cloud adoption strategies.',
      image: 'https://img.freepik.com/free-photo/cloud-technology-with-futuristic-hologram-smartwatch_53876-124625.jpg',
      features: ['Cloud Assessment', 'Migration Planning', 'Security & Compliance']
    },
    {
      title: 'Enterprise Architecture',
      description: 'Design scalable and efficient IT architectures for your enterprise.',
      image: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg',
      features: ['Architecture Design', 'System Integration', 'Performance Optimization']
    },
    {
      title: 'Technology Advisory',
      description: 'Strategic guidance on technology investments and innovation.',
      image: 'https://img.freepik.com/free-photo/business-people-meeting-plan-analysis-graph-company-finance-strat_74952-1347.jpg',
      features: ['Technology Assessment', 'Innovation Planning', 'Risk Management']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      solutions: ['EMR Systems', 'Telemedicine', 'Healthcare Analytics'],
      image: 'https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611240.jpg'
    },
    {
      name: 'Finance',
      icon: '🏦',
      solutions: ['FinTech Solutions', 'Digital Banking', 'Risk Management'],
      image: 'https://img.freepik.com/free-photo/business-people-discussing-charts_53876-102773.jpg'
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      solutions: ['IoT Integration', 'Supply Chain', 'Automation'],
      image: 'https://img.freepik.com/free-photo/factory-worker-wearing-uniform-hardhat-operating-cnc-machinery_342744-214.jpg'
    },
    {
      name: 'Retail',
      icon: '🛍️',
      solutions: ['E-commerce', 'POS Systems', 'Customer Analytics'],
      image: 'https://img.freepik.com/free-photo/young-woman-shop-assistant-wearing-face-mask-while-working_637285-8675.jpg'
    }
  ];

  const methodology = [
    {
      phase: 'Discovery',
      description: 'Understanding your business needs and challenges',
      activities: ['Stakeholder Interviews', 'Process Analysis', 'Requirements Gathering'],
      icon: '🔍'
    },
    {
      phase: 'Strategy',
      description: 'Developing a comprehensive roadmap for success',
      activities: ['Solution Design', 'Technology Selection', 'Risk Assessment'],
      icon: '📋'
    },
    {
      phase: 'Implementation',
      description: 'Executing the plan with precision and expertise',
      activities: ['Project Management', 'Change Management', 'Quality Assurance'],
      icon: '⚙️'
    },
    {
      phase: 'Optimization',
      description: 'Continuous improvement and refinement',
      activities: ['Performance Monitoring', 'Process Optimization', 'Training'],
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen w-screen  bg-gradient-to-b from-black-900 via-black-800 to-black-900 text-white ">
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
            IT Consulting & Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
           Strategic technology consulting to drive your digital transformation journey
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

      {/* Services Grid */}
      {/* <div className="container mx-auto px-4 mb-20">
        <h2 
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600"
          data-aos="fade-down"
        >
          Our Consulting Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-orange-800/40 border border-orange-700/50 relative rounded-2xl overflow-hidden shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-orange-700/50 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Industries Section */}
      <div className="container mx-auto  px-4 mb-20">
        <h2 
          className="text-3xl font-bold mt-20 text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600"
          data-aos="fade-down"
        >
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-orange-800/40 border border-orange-700/50 rounded-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-3xl mb-2">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="mr-2">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology Section */}
      <div className="container mx-auto px-4 mb-20">
        <h2 
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600"
          data-aos="fade-down"
        >
          Our Methodology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((phase, index) => (
            <div
              key={index}
              className="bg-orange-800/40 border border-orange-700/50 rounded-xl p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{phase.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
              <p className="text-gray-300 mb-4">{phase.description}</p>
              <ul className="space-y-2">
                {phase.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="mr-2">•</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

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

export default ITConsulting;
