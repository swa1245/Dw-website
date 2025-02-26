import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './AIMachineLearning.css';

const AIMachineLearning = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const aiServices = [
    {
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions for object detection, recognition, and tracking.',
      image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2070',
      icon: '👁️',
      features: ['Object Detection', 'Facial Recognition', 'Video Analytics', 'Scene Understanding']
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis and language understanding solutions for automated communication and insights.',
      image: 'https://plus.unsplash.com/premium_photo-1733317429945-a3688f50430b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMGxhbmd1YWdlJTIwcHJvY2Vzc2luZ3xlbnwwfHwwfHx8MA%3D%3D?w=2070&auto=format&fit=crop&q=60', 
      icon: '💬',
      features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Chatbots']
    }
,    
    {
      title: 'Predictive Analytics',
      description: 'Data-driven forecasting and prediction models for business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      icon: '📊',
      features: ['Demand Forecasting', 'Risk Analysis', 'Pattern Recognition', 'Time Series Analysis']
    },
    {
      title: 'Deep Learning',
      description: 'Neural network solutions for complex pattern recognition and decision-making.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070',
      icon: '🧠',
      features: ['Neural Networks', 'Transfer Learning', 'Model Optimization', 'Reinforcement Learning']
    }
  ];

  const applications = [
    {
      sector: 'Healthcare',
      icon: '🏥',
      use_cases: ['Disease Detection', 'Patient Monitoring', 'Drug Discovery', 'Medical Imaging'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070'
    },
    {
      sector: 'Finance',
      icon: '🏦',
      use_cases: ['Fraud Detection', 'Risk Assessment', 'Trading Algorithms', 'Credit Scoring'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070'
    },
    {
      sector: 'Manufacturing',
      icon: '🏭',
      use_cases: ['Quality Control', 'Predictive Maintenance', 'Process Optimization', 'Supply Chain'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070'
    },
    {
      sector: 'Retail',
      icon: '🛍️',
      use_cases: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Demand Forecasting'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070'
    }
  ];

  const features = [
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions designed to address your specific business challenges.',
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070'
    },
    {
      title: 'Scalable Architecture',
      description: 'Cloud-native solutions that scale with your business needs.',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070'
    },
    {
      title: 'Real-time Processing',
      description: 'Fast and efficient processing for immediate insights and actions.',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070'
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade security measures to protect your sensitive data.',
      icon: '🔒',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070'
    }
  ];

  const technologies = [
    { name: 'TensorFlow', icon: '🧮' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Scikit-learn', icon: '🔬' },
    { name: 'OpenCV', icon: '👁️' },
    { name: 'NLTK', icon: '📝' },
    { name: 'Keras', icon: '🧠' }
  ];

  return (
    <div className="min-h-screen w-screen w-full bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white">
      {/* Hero Section */}
      <motion.div 
        className=" relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
            alt="AI & Machine Learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-dark-950/80 to-dark-950"></div>
        </div>
        
        <div className="container mx-auto px-4  relative z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-7xl  font-bold mb-6 gradient-text">
              AI & Machine Learning
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence and machine learning solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap  justify-center gap-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/90"></div>
      </motion.div>

      {/* Services Section */}
      <section className="py-44">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our AI & ML Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to drive innovation and efficiency in your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card rounded-2xl overflow-hidden"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-72">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl feature-icon">{service.icon}</span>
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 gradient-text">Industry Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how AI is transforming various industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="ai-card rounded-2xl overflow-hidden"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <img
                    src={app.image}
                    alt={app.sector}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl feature-icon">{app.icon}</span>
                    <h3 className="text-2xl font-bold">{app.sector}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {app.use_cases.map((use_case, i) => (
                      <li key={i} className="flex items-center text-gray-400">
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
                        {use_case}
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
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 gradient-text">Key Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of technology with our advanced features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="ai-card rounded-2xl overflow-hidden"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent"></div>
                </div>
                
                <div className="p-6 text-center">
                  <span className="text-4xl feature-icon mb-6 inline-block">{feature.icon}</span>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8 gradient-text">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Let's discuss how AI and machine learning can drive your business forward and give you a competitive edge in the digital age.
            </p>
            <Link to="/contact">
              <motion.button 
                className="cta-button px-12 py-5 text-white font-semibold rounded-full text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section> */}
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

export default AIMachineLearning;
