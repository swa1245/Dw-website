import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  const [filter, setFilter] = useState('all');
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      if (!scrollRef.current) return;
      
      const totalHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    {
      title: 'The Future of AI in Enterprise Solutions',
      category: 'technology',
      date: 'Jan 5, 2025',
      readTime: '5 min read',
      author: 'John Anderson',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      excerpt: 'Exploring how artificial intelligence is revolutionizing enterprise solutions and transforming business operations.',
      tags: ['AI', 'Enterprise', 'Innovation'],
      featured: true,
      content: `Artificial Intelligence is reshaping the enterprise landscape at an unprecedented pace. From automating routine tasks to providing deep insights through data analysis, AI is becoming an indispensable tool for modern businesses.

      In this comprehensive guide, we'll explore:
      • How AI is transforming different sectors
      • Implementation strategies for enterprise AI
      • Real-world success stories
      • Future predictions and trends`,
    },
    {
      title: 'Building Scalable Cloud Architecture',
      category: 'development',
      date: 'Jan 3, 2025',
      readTime: '7 min read',
      author: 'Sarah Mitchell',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
      excerpt: 'Best practices for designing and implementing scalable cloud architectures for modern applications.',
      tags: ['Cloud', 'Architecture', 'DevOps'],
      featured: false,
    },
    {
      title: 'UX Design Trends for 2025',
      category: 'design',
      date: 'Jan 1, 2025',
      readTime: '4 min read',
      author: 'Emily Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=100&h=100&fit=crop',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=500&fit=crop',
      excerpt: 'Discover the latest trends in user experience design that will shape the digital landscape in 2025.',
      tags: ['UX Design', 'Trends', 'UI'],
      featured: false,
    },
    {
      title: 'The Rise of Edge Computing',
      category: 'technology',
      date: 'Dec 28, 2024',
      readTime: '6 min read',
      author: 'David Chen',
      authorImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      excerpt: 'Understanding the impact of edge computing on modern application architecture and performance.',
      tags: ['Edge Computing', 'IoT', 'Technology'],
      featured: false,
    },
    {
      title: 'Mastering React Performance',
      category: 'development',
      date: 'Dec 25, 2024',
      readTime: '8 min read',
      author: 'Michael Kim',
      authorImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
      excerpt: 'Advanced techniques for optimizing React applications and improving user experience.',
      tags: ['React', 'Performance', 'JavaScript'],
      featured: false,
    },
    {
      title: 'Digital Marketing Strategies',
      category: 'marketing',
      date: 'Dec 22, 2024',
      readTime: '5 min read',
      author: 'Lisa Thompson',
      authorImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      excerpt: 'Effective digital marketing strategies for reaching and engaging your target audience.',
      tags: ['Marketing', 'Digital', 'Strategy'],
      featured: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'technology', label: 'Technology' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const filteredPosts = filter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === filter);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen w-screen overflow-hidden  bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" ref={scrollRef}>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary-500 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10" />
          <div className="absolute inset-0 bg-[url('path/to/pattern.svg')] opacity-20" />
        </div>
        {/* <div className="container-custom pt-32 pb-20 relative">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text">
              Insights & Innovation
            </h1>
            <p className="text-dark-100 text-xl leading-relaxed">
              Dive into the latest trends, insights, and innovations in technology, development, and digital transformation.
            </p>
          </motion.div>
          
        </div> */}
        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
        <img
  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D?w=1080&auto=format&fit=crop&q=60"
  alt="About Blog"
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
            Insights & Innovation
          </h1>
          <p
            className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-dark-200"
            data-aos="fade-up"
            data-aos-delay="300"
          >
              Dive into the latest trends, insights, and innovations in technology, development, and digital transformation.
          </p>
        </div>
      </section>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="container-custom py-16">
          <motion.div 
            className="bg-dark-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-dark-700"
            data-aos="fade-up"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <span className="px-3 py-1 text-sm font-medium bg-primary-500/10 text-primary-400 rounded-full">
                  Featured Post
                </span>
                <h2 className="text-3xl font-bold text-white">{featuredPost.title}</h2>
                <p className="text-dark-100 text-lg leading-relaxed">
                  {featuredPost.content}
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={featuredPost.authorImage}
                    alt={featuredPost.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-medium">{featuredPost.author}</p>
                    <p className="text-dark-300 text-sm">{featuredPost.date} · {featuredPost.readTime}</p>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[300px]">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Category Filter */}
      <div className="container-custom py-8">
        <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${filter === category.id 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-dark-800 text-dark-100 hover:bg-dark-700'}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className="bg-dark-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-primary-400">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-dark-100">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={post.authorImage}
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-dark-200">{post.author}</span>
                  </div>
                  <span className="text-sm text-dark-300">{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="container-custom py-20">
        <motion.div 
          className="max-w-2xl mx-auto text-center space-y-8"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
          <p className="text-dark-100">
            Subscribe to our newsletter for the latest insights and updates delivered straight to your inbox.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white focus:outline-none focus:border-primary-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Blog;
