import { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ResourceOutsourcing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: "Staff Augmentation",
      description:
        "Flexible staffing solutions to supplement your team with skilled professionals.",
      icon: "👥",
      image:
        "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg",
    },
    {
      title: "Dedicated Teams",
      description:
        "Fully managed teams for long-term projects and ongoing development needs.",
      icon: "🤝",
      image:
        "https://img.freepik.com/free-photo/group-diverse-people-brainstorming-sharing-ideas_53876-138139.jpg",
    },
    {
      title: "Project-Based Outsourcing",
      description:
        "Complete project execution with dedicated resources and project management.",
      icon: "📊",
      image:
        "https://img.freepik.com/free-photo/business-people-discussing-charts_53876-102773.jpg",
    },
    {
      title: "Technical Expertise",
      description:
        "Access to specialized skills and domain expertise across technologies.",
      icon: "💡",
      image:
        "https://img.freepik.com/free-photo/team-programmers-discussing-about-codes_1098-18618.jpg",
    },
  ];

  const benefits = [
    {
      title: "Cost Optimization",
      description:
        "Reduce operational costs by up to 40% while maintaining quality.",
      icon: "💰",
    },
    {
      title: "Scalable Resources",
      description: "Quickly scale your team up or down based on project needs.",
      icon: "📈",
    },
    {
      title: "Reduced Time-to-Market",
      description:
        "Accelerate project delivery with ready-to-deploy expertise.",
      icon: "🚀",
    },
    {
      title: "Access to Global Talent",
      description:
        "Tap into a diverse pool of skilled professionals worldwide.",
      icon: "🌍",
    },
    {
      title: "Flexible Engagement Models",
      description:
        "Choose from various engagement models that suit your needs.",
      icon: "🔄",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and performance monitoring.",
      icon: "✅",
    },
  ];

  const expertise = [
    {
      area: "Web Development",
      skills: ["React", "Angular", "Node.js", "PHP"],
      image:
        "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
    },
    {
      area: "Mobile Development",
      skills: ["iOS", "Android", "React Native", "Flutter"],
      image:
        "https://img.freepik.com/free-photo/mobile-development-concept_23-2150166851.jpg",
    },
    {
      area: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes"],
      image:
        "https://img.freepik.com/free-photo/cloud-technology-with-futuristic-hologram-smartwatch_53876-124625.jpg",
    },
    {
      area: "Data & AI",
      skills: ["Machine Learning", "Data Science", "Big Data", "Analytics"],
      image:
        "https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-124672.jpg",
    },
  ];

  return (
    <div className="min-h-screen w-screen  bg-gradient-to-b from-black-900 via-black-800 to-black-900 text-white ">
      {/* Hero Section */}
      {/* <div className="container mx-auto px-4 text-center mb-16">
        <h1 
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600"
          data-aos="fade-down"
        >
          Resource Outsourcing
        </h1>
        <p 
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          data-aos="fade-up"
        >
          Scale your team with top talent and accelerate your project delivery
        </p>
        <div className="relative h-96 rounded-2xl overflow-hidden mb-12" data-aos="zoom-in">
        <img
  src="https://images.unsplash.com/photo-1560264418-c4445382edbc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=1080&q=80"
  alt="Resource Outsourcing"
  className="w-full h-full object-cover"
/>


          <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent to-transparent"></div>
        </div>
      </div> */}
      <motion.div
        className=" h-[60vh] relative flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.freepik.com/free-photo/business-person-looking-finance-graphs_23-2150461316.jpg?ga=GA1.1.402563534.1736440284&semt=ais_incoming"
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
            Resource Outsourcing
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Build and maintain robust IT systems that scale with your business
              needs
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

      {/* Services Grid */}
      {/* <div className="container mx-auto px-4 mb-20">
        <h2 
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600"
          data-aos="fade-down"
        >
          Our Outsourcing Services
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
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div> */}
      {/* </div> */}

      {/* Expertise Areas */}
      <div className="container mx-auto mt-20 px-4 mb-20">
        <h2
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600"
          data-aos="fade-down"
        >
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((area, index) => (
            <div
              key={index}
              className="bg-black-800/40 border border-black-700/50 rounded-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={area.image}
                alt={area.area}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{area.area}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-orange-700/50 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 mb-20">
        <h2
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600"
          data-aos="fade-down"
        >
          Why Choose Our Outsourcing Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black-800/40 border border-black-700/50 rounded-xl p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
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
              Lets work together to bring your vision to life with our
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
    //   </div>
    // </div>
  );
};

export default ResourceOutsourcing;
