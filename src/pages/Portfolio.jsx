import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      description:
        "Modern e-commerce solution with advanced features and seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      path: "/projects/ecommerce",
    },
    {
      title: "Healthcare App",
      category: "mobile",
      description:
        "Innovative healthcare management system for patients and providers.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "AI"],
      path: "/projects/healthcare",
    },
    {
      title: "Financial Dashboard",
      category: "web",
      description: "Real-time financial analytics and reporting dashboard.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Python", "D3.js"],
      path: "/projects/finance",
    },
    {
      title: "Smart Home System",
      category: "IoT",
      description: "IoT-based home automation and monitoring system.",
      image:
        "https://img.freepik.com/free-photo/digital-tablet-screen-with-smart-home-controller-wooden-table_53876-98547.jpg?ga=GA1.1.373861391.1735111696&semt=ais_hybrid",
      tags: ["IoT", "React", "Node.js"],
      path: "/projects/smarthome",
    },
    {
      title: "AI Content Generator",
      category: "ai",
      description: "AI-powered content creation and optimization platform.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["Python", "TensorFlow", "GPT-3"],
      path: "/projects/ai-content",
    },
    {
      title: "Supply Chain Platform",
      category: "web",
      description: "End-to-end supply chain management and tracking system.",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop",
      tags: ["React", "Blockchain", "AWS"],
      path: "/projects/supply-chain",
    },
  ];

  const handleProjectClick = (path) => {
    console.log("Navigating to:", path); // Debug log
    navigate(path);
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className=" w-screen  bg-dark-900 ">
      {/* <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Portfolio</h1>
          <p className="text-xl text-gray-300">Discover our latest projects and innovations</p>
        </div> */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww?w=1080&auto=format&fit=crop&q=60"
            alt="About Portfolio"
            className="w-full h-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/90"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            Our Portfolio
          </h1>
          <p
            className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-dark-200"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Discover our latest projects and innovations
          </p>
        </div>
      </section>
      <div className="container-custom py-8">
        <div
          className="flex flex-wrap  gap-4 justify-center"
          data-aos="fade-up"
        >
          {["all", "web", "mobile", "IoT", "ai"].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full capitalize ${
                filter === category
                  ? "bg-primary text-white"
                  : "bg-dark-800 text-gray-300 hover:bg-primary/20"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => handleProjectClick(project.path)}
              className="bg-dark-800 rounded-xl overflow-hidden cursor-pointer group transform transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-dark-700 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <section className="cta-section mt-20 py-20">
        <div className="container mt-4 mx-auto px-4">
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

export default Portfolio;
