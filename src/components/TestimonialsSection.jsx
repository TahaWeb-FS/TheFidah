import React, { useState, useEffect } from 'react';
import { Crown, Gem, Award, Users, Clock, Sparkles } from 'lucide-react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const headerInView = useInView(headerRef, { once: false, margin: "-50px" });
  const contentInView = useInView(contentRef, { once: false, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: false, margin: "-50px" });
  const featuresInView = useInView(featuresRef, { once: false, margin: "-100px" });
  
  const controls = useAnimation();
  const headerControls = useAnimation();
  const contentControls = useAnimation();
  const statsControls = useAnimation();
  const featuresControls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation controls based on scroll
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    } else {
      headerControls.start("hidden");
    }
  }, [headerInView, headerControls]);

  useEffect(() => {
    if (contentInView) {
      contentControls.start("visible");
    } else {
      contentControls.start("hidden");
    }
  }, [contentInView, contentControls]);

  useEffect(() => {
    if (statsInView) {
      statsControls.start("visible");
    } else {
      statsControls.start("hidden");
    }
  }, [statsInView, statsControls]);

  useEffect(() => {
    if (featuresInView) {
      featuresControls.start("visible");
    } else {
      featuresControls.start("hidden");
    }
  }, [featuresInView, featuresControls]);

  const tabs = [
    {
      id: 0,
      title: "Our Heritage",
      icon: Crown,
      content: "Founded with a passion for exceptional craftsmanship, our journey began with a simple belief: that every piece of jewelry should tell a story. Over the years, we have cultivated relationships with master artisans and sourced the finest materials from around the world.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop"
    },
    {
      id: 1,
      title: "Craftsmanship",
      icon: Gem,
      content: "Each piece in our collection is meticulously handcrafted by skilled artisans who have dedicated their lives to perfecting their craft. We combine traditional techniques with modern innovation to create jewelry that transcends time and trends.",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Excellence",
      icon: Award,
      content: "Our commitment to excellence is unwavering. From the initial design concept to the final polish, every step of our process is guided by an obsession with quality and attention to detail that sets us apart in the luxury jewelry industry.",
      image: "https://images.unsplash.com/photo-1529440342401-b6b048e8ad10?w=600&h=400&fit=crop"
    }
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence", icon: Clock },
    { number: "10K+", label: "Satisfied Clients", icon: Users },
    { number: "500+", label: "Unique Designs", icon: Sparkles },
    { number: "50+", label: "Awards Won", icon: Award }
  ];

  const features = [
    {
      title: "Lifetime Warranty",
      description: "Every piece comes with our comprehensive lifetime warranty, ensuring your investment is protected for generations.",
      icon: Award
    },
    {
      title: "Custom Design",
      description: "Work with our master designers to create bespoke pieces that reflect your unique style and personality.",
      icon: Gem
    },
    {
      title: "Ethical Sourcing",
      description: "We are committed to responsible sourcing practices, ensuring all materials meet the highest ethical standards.",
      icon: Crown
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 150,
        damping: 25
      }
    }
  };

  const statsVariants = {
    hidden: { 
      opacity: 0,
      y: 40,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.15
      }
    }
  };

  const featuresVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.2
      }
    }
  };

  const backgroundVariants = {
    animate: {
      x: [0, 15, -15, 0],
      y: [0, -15, 15, 0],
      scale: [1, 1.02, 0.98, 1],
      rotate: [0, 0.5, -0.5, 0],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      id="about" 
      className="relative min-h-screen bg-black overflow-hidden py-24"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      
      {/* Animated Background Elements - Only show when in view */}
      <AnimatePresence>
        {isInView && (
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-900/4 via-blue-900/2 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
              variants={backgroundVariants}
              animate="animate"
              style={{
                left: '10%',
                top: '20%'
              }}
            />
            <motion.div 
              className="absolute w-[300px] h-[300px] bg-gradient-to-l from-indigo-900/3 via-purple-800/2 to-transparent rounded-full mix-blend-screen filter blur-3xl"
              variants={backgroundVariants}
              animate="animate"
              style={{
                right: '15%',
                bottom: '25%',
                animationDelay: '12s'
              }}
            />
            <motion.div 
              className="absolute w-[200px] h-[200px] bg-gradient-to-tr from-gray-200/1 via-white/1 to-transparent rounded-full mix-blend-screen filter blur-2xl"
              variants={backgroundVariants}
              animate="animate"
              style={{
                left: '70%',
                top: '60%',
                animationDelay: '8s'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={headerControls}
        >
          <motion.div 
            className="flex items-center justify-center space-x-6 mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="w-20 h-[1px] bg-gradient-to-r from-transparent to-gray-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: headerInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Crown size={28} className="text-indigo-400" />
            </motion.div>
            <motion.div 
              className="w-20 h-[1px] bg-gradient-to-l from-transparent to-gray-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: headerInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-7xl font-light text-white mb-6 tracking-[0.15em] uppercase"
            variants={itemVariants}
          >
            Our{' '}
            <motion.span 
              className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              Legacy
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            variants={itemVariants}
          >
            Crafting timeless elegance through generations of artistry, innovation, and unwavering dedication to perfection
          </motion.p>
        </motion.div>

        {/* Main Content Area */}
        <motion.div 
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={contentControls}
        >
          
          {/* Left Side - Tabs */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            {/* Tab Navigation */}
            <div className="flex flex-col space-y-4">
              {tabs.map((tab, index) => {
                const IconComponent = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`group relative text-left p-6 rounded-2xl border transition-all duration-500 ${
                      activeTab === index 
                        ? 'bg-gradient-to-r from-gray-900/80 to-gray-800/60 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
                        : 'bg-gray-900/20 border-gray-800/30 hover:border-gray-700/50 hover:bg-gray-900/40'
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ 
                      opacity: contentInView ? 1 : 0,
                      x: contentInView ? 0 : -50
                    }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          activeTab === index 
                            ? 'bg-indigo-500/20 text-indigo-400' 
                            : 'bg-gray-800/50 text-gray-400 group-hover:text-gray-300'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                      <div>
                        <h3 className={`text-xl font-medium transition-colors duration-300 ${
                          activeTab === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {tab.title}
                        </h3>
                        <AnimatePresence mode="wait">
                          {activeTab === index && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-gray-400 mt-3 leading-relaxed"
                            >
                              {tab.content}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="relative rounded-3xl overflow-hidden"
              >
                <motion.img 
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <motion.div 
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-2xl font-light text-white mb-2 tracking-wide">
                    {tabs[activeTab].title}
                  </h4>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-400"></div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          variants={statsVariants}
          initial="hidden"
          animate={statsControls}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent size={24} className="text-indigo-400" />
                </motion.div>
                <motion.div 
                  className="text-4xl lg:text-5xl font-light text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: statsInView ? 1 : 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </motion.div>
                <p className="text-gray-400 font-light tracking-wide uppercase text-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Section */}
        <motion.div 
          ref={featuresRef}
          className="grid lg:grid-cols-3 gap-8"
          variants={featuresVariants}
          initial="hidden"
          animate={featuresControls}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 hover:border-indigo-500/30 transition-all duration-500 text-center group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 20px 40px -12px rgba(79, 70, 229, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <IconComponent size={28} className="text-indigo-400" />
                </motion.div>
                <h3 className="text-2xl font-medium text-white mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom accent */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 1 }}
      />
    </motion.div>
  );
};

export default AboutSection;