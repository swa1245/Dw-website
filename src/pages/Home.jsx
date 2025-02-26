import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import ImageSlider from "../components/ImageSlider";
import { motion } from "framer-motion";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Stats Data
  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "30+", label: "Expert Developers" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
  ];

  // Process Steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We analyze your requirements and create a comprehensive plan.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our team creates intuitive and engaging designs for your solution.",
      icon: "✨",
    },
    {
      number: "03",
      title: "Development",
      description: "We build your solution using cutting-edge technologies.",
      icon: "⚡",
    },
    {
      number: "04",
      title: "Deployment",
      description: "Your solution is thoroughly tested and launched.",
      icon: "🚀",
    },
  ];

  // Technologies
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  // Services Data
  const services = [
    {
      title: "Web Development",
      description:
        "Create stunning, responsive websites that engage your audience and drive results.",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
      link: "/services/web-development",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Progressive Web Apps",
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "Build powerful mobile applications that connect with your users on any device.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      link: "/services/MobileAppDevelopment",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
      ],
    },
    {
      title: "Software Development",
      description:
        "Develop scalable software solutions that streamline your business operations.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      link: "/services/software-development",
      features: [
        "Custom Software",
        "Enterprise Solutions",
        "Cloud Applications",
      ],
    },
    {
      title: "ERP & CRM Systems",
      description:
        "Integrate comprehensive ERP solutions to optimize your business processes.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      link: "/services/erp-systems",
      features: [
        "Business Integration",
        "Process Automation",
        "Data Management",
      ],
    },
    {
      title: "Software Maintenance",
      description:
        "Keep your software running smoothly with our comprehensive maintenance services.",
      icon: "🛠️",
      // path: '/services/software-maintenance',
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      link: "/services/software-maintenance",
      features: [
        "Performance Optimization",
        "Security Updates",
        "24/7 Support",
      ],
    },
    {
      title: "Digital Innovation",
      description:
        "Stay ahead with cutting-edge digital solutions and innovative technologies.",
      icon: "💡",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      link: "/services/ai-machine-learning",
      features: ["AI Solutions", "IoT Integration", "Blockchain"],
    },
  ];

  const slides = [
    {
      title: "Innovating Tomorrow's Solutions",
      description:
        "Leading the way in digital transformation with cutting-edge technology solutions",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
    {
      title: "Empowering Digital Growth",
      description:
        "Building scalable and sustainable solutions for businesses worldwide",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60", // New Unsplash image URL
    },
    {
      title: "Future-Ready Solutions",
      description:
        "Transforming ideas into reality with advanced technology and expertise",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&auto=format&fit=crop&q=60", // New Unsplash image URL
    },
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Modern Technology",
      description:
        "Utilizing cutting-edge technologies to deliver innovative solutions.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Fast Performance",
      description: "Optimized solutions that deliver exceptional performance.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Expert Team",
      description: "Dedicated professionals with years of industry experience.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className=" w-screen overflow-hidden  bg-black-900">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <ImageSlider slides={slides} />
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 mt-0 sm:mt-6 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card p-6 sm:p-8 text-center transform hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="stat-number text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-200 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
            data-aos="fade-down"
          >
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="process-card p-6 sm:p-8 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700 transform hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="process-number text-2xl sm:text-3xl font-bold text-primary-400 mb-3">
                  {step.number}
                </div>
                <div className="text-3xl sm:text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-dark-200 text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {/* <section className="tech-section py-20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center mb-16"
            data-aos="fade-down"
          >
            Technologies We Use
          </h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="tech-item"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="tech-icon"
                />
                <div className="text-gray-300">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text">
              Our Services
            </h2>
            <p className="text-dark-200 text-base sm:text-lg max-w-3xl mx-auto px-4">
              Comprehensive digital solutions tailored to transform your
              business vision into reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                <div className="relative overflow-hidden rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700 h-full p-6 sm:p-8">
                  <div className="absolute inset-0 z-0">
                    <motion.div
                      className="w-full h-full"
                      initial={{ scale: 1.2 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-10"
                      />
                    </motion.div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-primary-400">
                      {service.title}
                    </h3>
                    <p className="text-dark-200 text-sm sm:text-base mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm sm:text-base text-dark-300"
                        >
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 mr-2"
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
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm sm:text-base"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
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
        {/* WhatsApp Contact Button */}
        <section className="fixed bottom-6 right-6 z-10">
          <a
            href="https://wa.me/9028954278"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white w-16 h-16 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition duration-300 transform"
            aria-label="Contact us on WhatsApp"
          >
            <i className="fab fa-whatsapp text-2xl sm:text-3xl animate-bounce"></i>
          </a>
        </section>
      </section>
    </div>
  );
};

export default Home;
