import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SubServices.css";

const WebDevelopment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const techStack = [
    {
      category: "Frontend",
      technologies: [
        { name: "React.js", icon: "/icons/frontend/react.svg" },
        { name: "Next.js", icon: "/icons/frontend/next.svg" },
        { name: "Vue.js", icon: "/icons/frontend/vue.svg" },
        { name: "Angular", icon: "/icons/frontend/angular.svg" },
        { name: "TailwindCSS", icon: "/icons/frontend/tailwind.svg" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "/icons/backend/node.svg" },
        { name: "Python/Django", icon: "/icons/backend/python.svg" },
        { name: "PHP/Laravel", icon: "/icons/backend/php.svg" },
        { name: ".NET Core", icon: "/icons/backend/dotnet.svg" },
      ],
    },
    {
      category: "Database",
      technologies: [
        { name: "MongoDB", icon: "/icons/database/mongodb.svg" },
        { name: "PostgreSQL", icon: "/icons/database/postgresql.svg" },
        { name: "MySQL", icon: "/icons/database/mysql.svg" },
      ],
    },
  ];

  const services = [
    {
      title: "Custom Web Applications",
      description:
        "Tailored web solutions that perfectly align with your business needs and objectives.",
      icon: "🎯",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      features: [
        "Scalable architecture",
        "Responsive design",
        "Cross-browser compatibility",
        "Performance optimization",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Robust online stores with seamless payment integration and inventory management.",
      icon: "🛍️",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      features: [
        "Secure payment gateways",
        "Inventory tracking",
        "Order management",
        "Customer analytics",
      ],
    },
    {
      title: "Progressive Web Apps",
      description:
        "Modern web applications that offer native app-like experience across all devices.",
      icon: "📱",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      features: [
        "Offline functionality",
        "Push notifications",
        "Fast loading speeds",
        "Native app features",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full w-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <motion.div
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3Dcc?q=80&w=2072"
           alt="Mobile App Development"
            className="w-full h-full object-cover object-center"
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
            Web Development Services
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Creating powerful, scalable, and beautiful web applications using
            cutting-edge technologies and best practices.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap  justify-center gap-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          ></motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/90"></div>
      </motion.div>
      {/* <motion.div
        className="relative overflow-hidden py-20 lg:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom relative z-10">
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166"
              alt="Web Development Hero"
              className="w-full h-full object-cover filter blur-sm"
            />
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Web Development Services
          </motion.h1>
          <motion.p
            className="text-xl text-dark-100 text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Creating powerful, scalable, and beautiful web applications using
            cutting-edge technologies and best practices.
          </motion.p>
        </div>
      </motion.div> */}

      {/* Tech Stack Section */}
      {/* <div className="container-custom py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="Web Development Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Technology Stack</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {techStack.map((stack, index) => (
            <motion.div
              key={stack.category}
              className="bg-dark-800/50 rounded-xl p-6 backdrop-blur-sm border border-dark-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-400">{stack.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {stack.technologies.map((tech) => (
                  <motion.div 
                    key={tech.name} 
                    className="flex items-center space-x-3 text-dark-100 p-2 rounded-lg hover:bg-dark-700/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-8 h-8 object-contain filter hover:brightness-125"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* Services Section */}
      <section className="py-20 bg-dark-900/50">
        <div className="container-custom">
          <h2
            className="text-4xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Our Web Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-dark-800 rounded-xl p-6 hover:bg-dark-700 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-primary">•</span>
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

      {/* Process Section */}
      <div className="container-custom py-20">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Our Development Process
        </h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-dark-700 transform -translate-y-1/2" />
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Discovery", "Planning", "Development", "Deployment"].map(
              (step, index) => (
                <motion.div
                  key={step}
                  className="relative bg-dark-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-dark-700"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary-400">
                    {step}
                  </h3>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
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

export default WebDevelopment;
