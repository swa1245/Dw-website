import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedPosition, setSelectedPosition] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const departments = [
    { id: 'all', name: 'All Departments', icon: '🏢' },
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'management', name: 'Management', icon: '📊' },
    { id: 'marketing', name: 'Marketing', icon: '📢' },
    { id: 'data', name: 'Data Science', icon: '📊' },
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs',
      icon: '🏥',
      imageUrl: '/images/benefits/health.jpg',
    },
    {
      title: 'Learning & Development',
      description: 'Professional development budget, learning resources, and certification support',
      icon: '📚',
      imageUrl: '/images/benefits/learning.jpg',
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and unlimited PTO',
      icon: '⚖️',
      imageUrl: '/images/benefits/balance.jpg',
    },
    {
      title: 'Team Events',
      description: 'Regular team building activities, social events, and annual retreats',
      icon: '🎉',
      videoUrl: '/videos/team-events.mp4',
    },
  ];

  const positions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'development',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We\'re looking for an experienced Full Stack Developer to join our team and help build innovative solutions for our clients.',
      requirements: [
        'Strong experience with React, Node.js, and modern web technologies',
        'Experience with cloud platforms (AWS/Azure)',
        'Strong problem-solving skills',
        'Excellent communication skills',
      ],
      responsibilities: [
        'Design and implement scalable web applications',
        'Collaborate with cross-functional teams',
        'Mentor junior developers',
        'Participate in code reviews',
      ],
      videoUrl: '/videos/dev-team.mp4',
    },
    {
      title: 'UX/UI Designer',
      department: 'design',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our design team to create beautiful and intuitive user experiences that delight our clients and their users.',
      requirements: [
        'Strong portfolio demonstrating UI/UX skills',
        'Experience with Figma and design systems',
        'Understanding of user-centered design principles',
        'Strong communication skills',
      ],
      responsibilities: [
        'Create user-centered designs',
        'Conduct user research',
        'Develop and maintain design systems',
        'Collaborate with development team',
      ],
      imageUrl: '/images/design-team.jpg',
    },
    {
      title: 'Project Manager',
      department: 'management',
      location: 'On-site',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead and manage complex technology projects from inception to delivery while ensuring client satisfaction.',
      requirements: [
        'PMP certification preferred',
        'Experience with Agile methodologies',
        'Strong leadership skills',
        'Excellent client communication',
      ],
      responsibilities: [
        'Lead project planning and execution',
        'Manage client relationships',
        'Coordinate cross-functional teams',
        'Ensure project delivery within constraints',
      ],
      videoUrl: '/videos/project-management.mp4',
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Drive our digital marketing initiatives and help grow our online presence.',
      requirements: [
        'Experience with SEO/SEM',
        'Social media marketing expertise',
        'Content creation skills',
        'Analytics and reporting',
      ],
      responsibilities: [
        'Develop marketing strategies',
        'Manage social media presence',
        'Create engaging content',
        'Track and report on KPIs',
      ],
      imageUrl: '/images/marketing-team.jpg',
    },
    {
      title: 'Data Scientist',
      department: 'data',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help our clients unlock insights from their data using advanced analytics and machine learning.',
      requirements: [
        'Strong background in statistics and ML',
        'Experience with Python and data science tools',
        'Knowledge of big data technologies',
        'Good communication skills',
      ],
      responsibilities: [
        'Develop ML models',
        'Analyze complex datasets',
        'Create data visualizations',
        'Present findings to stakeholders',
      ],
      videoUrl: '/videos/data-science.mp4',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-20"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/careers-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Build the future of technology with us. We're always looking for talented individuals to join our innovative team.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                {benefit.videoUrl ? (
                  <video
                    className="w-full rounded-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={benefit.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={benefit.imageUrl}
                    alt={benefit.title}
                    className="w-full rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Open Positions
          </h2>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`flex items-center px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{dept.icon}</span>
                {dept.name}
              </button>
            ))}
          </div>

          {/* Positions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions
              .filter(
                (position) =>
                  selectedDepartment === 'all' || position.department === selectedDepartment
              )
              .map((position, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                        {position.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <button
                      onClick={() => setSelectedPosition(position)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Position Details Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">{selectedPosition.title}</h3>
                <button
                  onClick={() => setSelectedPosition(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">About the Role</h4>
                  <p className="text-gray-600">{selectedPosition.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Requirements</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {selectedPosition.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Responsibilities</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {selectedPosition.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {selectedPosition.videoUrl && (
                  <div>
                    <h4 className="font-semibold mb-2">Team Video</h4>
                    <video
                      className="w-full rounded-lg"
                      controls
                      poster={selectedPosition.imageUrl}
                    >
                      <source src={selectedPosition.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                )}

                {!selectedPosition.videoUrl && selectedPosition.imageUrl && (
                  <div>
                    <h4 className="font-semibold mb-2">Team Photo</h4>
                    <img
                      src={selectedPosition.imageUrl}
                      alt="Team"
                      className="w-full rounded-lg"
                    />
                  </div>
                )}

                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
