import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SubServices.css";

const MobileAppDevelopment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      title: "Native App Development",
      description:
        "High-performance native applications for iOS and Android platforms.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974",
      icon: (
        <svg
          className="w-12 h-12 text-primary mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        "Platform-specific UI/UX",
        "Hardware integration",
        "High performance",
        "App store optimization",
      ],
    },
    {
      title: "Cross-Platform Development",
      description:
        "Cost-effective solutions that work seamlessly across multiple platforms.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470",
      icon: (
        <svg
          className="w-12 h-12 text-primary mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      features: [
        "Code reusability",
        "Faster development",
        "Consistent UI",
        "Easy maintenance",
      ],
    },
    {
      title: "App Maintenance",
      description:
        "Continuous support and updates to keep your app running smoothly.",
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1470",
      icon: (
        <svg
          className="w-12 h-12 text-primary mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      features: [
        "Regular updates",
        "Performance monitoring",
        "Bug fixes",
        "Feature enhancements",
      ],
    },
  ];

  const platforms = [
    { name: "iOS", icon: "🍎" },
    { name: "Android", icon: "🤖" },
    { name: "Flutter", icon: "💙" },
    { name: "React Native", icon: "⚛️" },
  ];

  return (
    <div className="min-h-screen w-full w-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&auto=format&fit=crop&q=60"
            alt="Mobile App Development"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            className="text-6xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mobile App Development
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transform your ideas into powerful mobile applications with our
            expert development services. We create innovative solutions for both
            iOS and Android platforms.
          </motion.p>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
           
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/90"></div>
      </motion.div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
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
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <svg
                          className="w-5 h-5 mr-3 text-primary"
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
          </motion.div>
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

export default MobileAppDevelopment;
