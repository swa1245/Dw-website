import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Careers', path: '/careers' },
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Testimonials', path: '/Team' },
      { name: 'Contact', path: '/contact' },
    ],
    social: [
      { name: 'LinkedIn', path: 'https://linkedin.com', icon: 'linkedin' },
      { name: 'Twitter', path: 'https://twitter.com', icon: 'twitter' },
      { name: 'Facebook', path: 'https://facebook.com', icon: 'facebook' },
      { name: 'Instagram', path: 'https://instagram.com', icon: 'instagram' },
    ],
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DW Innovation Pvt. Ltd</h3>
            <p className="text-gray-300 mb-4">
              Transforming ideas into innovative solutions through cutting-edge technology.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@dwi4u.com</p>
              <p>Phone: +91 9028954278</p>
              <p>Address:  Pune , maharashtra , india </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © {currentYear} DW Innovation Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
