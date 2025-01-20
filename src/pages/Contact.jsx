import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

emailjs.init("");

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirement: '',
    budget: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, type: '', message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const templateParams = {
        to_name: "Swaraj",
        from_name: formData.name,
        from_email: formData.email,
        service: formData.requirement,
        budget: formData.budget,
        message: formData.message,
      };

      const response = await emailjs.send(
        
        templateParams
      );

      if (response.status === 200) {
        setNotification({
          show: true,
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.',
        });

        setFormData({
          name: '',
          email: '',
          requirement: '',
          budget: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: 'Email',
      info: 'info@dwi4u.com',
      icon: '📧',
    },
    {
      title: 'Phone',
      info: '+91 9028954278',
      icon: '📱',
    },
    {
      title: 'Address',
      info: 'Pune, Maharashtra, India',
      icon: '📍',
    },
  ];

  return (
    <div className="min-h-screen w-screen  bg-dark-900 py-20">
      <div className="container mx-auto px-4">
        {notification.show && (
          <div
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${notification.type === 'success'
                ? 'bg-green-500/90 text-white'
                : 'bg-red-500/90 text-white'
              } transition-all duration-300 z-50`}
          >
            {notification.message}
          </div>
        )}

        <div className="text-center mb-16 mt-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-lg text-dark-100">
            Have a project in mind? Let's talk about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8" data-aos="fade-right">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-dark-800/50 p-6 rounded-2xl border border-dark-700/50 backdrop-blur-sm"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-dark-100">{item.info}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <div className="bg-dark-800/30 p-8 rounded-2xl border border-dark-700/50 backdrop-blur-sm relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-primary-600/5" />
              <div className="relative">
                <h2 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-100 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-400 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors duration-300"
                        
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-100 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-400 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors duration-300"
                       
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirement" className="block text-sm font-medium text-dark-100 mb-2">
                      Service Requirement
                    </label>
                    <select
                      id="requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-400 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors duration-300"
                    >
                      <option value="" className="bg-dark-900">Select a service</option>
                      <option value="Web Development" className="bg-dark-900">Web Development</option>
                      <option value="Mobile App Development" className="bg-dark-900">Mobile App Development</option>
                      <option value="UI/UX Design" className="bg-dark-900">UI/UX Design</option>
                      <option value="Cloud Solutions" className="bg-dark-900">Cloud Solutions</option>
                      <option value="AI & Machine Learning" className="bg-dark-900">AI & Machine Learning</option>
                      <option value="Blockchain Development" className="bg-dark-900">Blockchain Development</option>
                      <option value="DevOps Services" className="bg-dark-900">DevOps Services</option>
                      <option value="Cybersecurity" className="bg-dark-900">Cybersecurity</option>
                      <option value="Data Analytics" className="bg-dark-900">Data Analytics</option>
                      <option value="IoT Solutions" className="bg-dark-900">IoT Solutions</option>
                      <option value="IT Consulting" className="bg-dark-900">IT Consulting</option>
                      <option value="Custom Development" className="bg-dark-900">Custom Development</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-dark-100 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-400 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors duration-300"
                    >
                      <option value="" className="bg-dark-900">Select budget range</option>
                      <option value="$5,000 - $10,000" className="bg-dark-900">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000" className="bg-dark-900">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000" className="bg-dark-900">$25,000 - $50,000</option>
                      <option value="$50,000+" className="bg-dark-900">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-100 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-400 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors duration-300"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium hover:from-primary-700 hover:to-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900 transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
