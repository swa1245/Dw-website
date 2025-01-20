import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
// import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Import service pages
import ItInfrac from './pages/subServices/ItInfrac';
import WebDevelopment from './pages/subServices/WebDevelopment';
import MobileAppDevelopment from './pages/subServices/MobileAppDevelopment';
import ERPSystems from './pages/subServices/ERPSystems';
import SoftwareDevelopment from './pages/subServices/SoftwareDevelopment';
import AIMachineLearning from './pages/subServices/AIMachineLearning';
import SoftwareMaintenance from './pages/subServices/SoftwareMaintenance';
import ResourceOutsourcing from './pages/subServices/ResourceOutsourcing';
import ITConsulting from './pages/subServices/ITConsulting';

// Import project pages
import ECommerce from './pages/projects/ECommerce';
import Healthcare from './pages/projects/Healthcare';
import Finance from './pages/projects/Finance';
import SmartHome from './pages/projects/SmartHome';
import AiContent from './pages/projects/AiContent';
import SupplyChain from './pages/projects/SupplyChain';
import ScrollToTop from '../src/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className="min-h-screen w-screen overflow-hidden bg-dark-900 text-white">
        <Navbar />
        <main className='w-screen'>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* <Route path="/team" element={<Team />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            {/* Service Routes */}
            <Route path="/services/it-infrastructure" element={<ItInfrac />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/MobileAppDevelopment" element={<MobileAppDevelopment />} />
            <Route path="/services/erp-systems" element={<ERPSystems />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/ai-machine-learning" element={<AIMachineLearning />} />
            <Route path="/services/software-maintenance" element={<SoftwareMaintenance />} />
            <Route path="/services/resource-outsourcing" element={<ResourceOutsourcing />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />

            {/* Project Routes */}
            <Route path="/projects/ecommerce" element={<ECommerce />} />
            <Route path="/projects/healthcare" element={<Healthcare />} />
            <Route path="/projects/finance" element={<Finance />} />
            <Route path="/projects/smarthome" element={<SmartHome />} />
            <Route path="/projects/ai-content" element={<AiContent />} />
            <Route path="/projects/supply-chain" element={<SupplyChain/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
