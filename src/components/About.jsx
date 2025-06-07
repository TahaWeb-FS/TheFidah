import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Hand, MapPin, Star, Heart } from 'lucide-react';
import logo from '../assets/logo.png';

const About = () => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { 
      number: "100%", 
      label: "Handcrafted Excellence", 
      icon: Hand,
      description: "Every piece meticulously crafted by skilled artisans"
    },
    { 
      number: "100%", 
      label: "Moroccan Heritage", 
      icon: MapPin,
      description: "Authentic designs rooted in our cultural legacy"
    },
    { 
      number: "25+", 
      label: "Years of Mastery", 
      icon: Star,
      description: "Quarter-century of refined craftsmanship expertise"
    },
    { 
      number: "1000+", 
      label: "Delighted Clients", 
      icon: Heart,
      description: "A growing family of satisfied customers worldwide"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  const slideInRight = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  return (
    <div id="about" className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute w-96 h-96 bg-white/5 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div 
          className="absolute w-80 h-80 bg-white/3 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{ right: '15%', top: '30%' }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(109,14,16,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side - Logo and Visual */}
          <motion.div variants={slideInLeft}>
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Subtle glow effect */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl blur-lg opacity-30"
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Main logo container */}
              <motion.div 
                className="relative mt-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-16 shadow-2xl border border-gray-800"
                whileHover={{ 
                  borderColor: 'rgb(55, 65, 81)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={logo} 
                  className='mx-auto my-6'
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ amount: 0.3 }}
                />
                
                {/* Elegant corner elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-600 opacity-50"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.5, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-600 opacity-50"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.5, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.div>
              
              {/* Refined accent */}
              <motion.div 
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-2 border-gray-700 shadow-xl"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={slideInRight}>
            
            {/* Header */}
            <motion.div 
              className="mb-16"
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our <motion.span 
                  style={{color: '#6d0e10'}}
                  initial={{ color: '#ffffff' }}
                  whileInView={{ color: '#6d0e10' }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Story
                </motion.span>
              </motion.h2>
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 'auto', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-16 h-0.5 bg-gray-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full"
                  style={{backgroundColor: '#6d0e10'}}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  viewport={{ once: true }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                />
                <motion.div 
                  className="w-8 h-0.5 bg-gray-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>

            {/* Story Content */}
            <motion.div 
              className="space-y-8 mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                Born from a passion for <span style={{color: '#6d0e10'}} className="font-medium">exceptional craftsmanship</span> and <span style={{color: '#6d0e10'}} className="font-medium">timeless design</span>, alfidah creates accessories that transcend trends and become cherished heirlooms.
              </motion.p>
              
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                We believe luxury lies in the details—meticulous stitching, premium materials, and thoughtful functionality. Our master artisans bring decades of expertise to every creation.
              </motion.p>
              
              <motion.div 
                className="relative p-8 bg-gray-900/40 rounded-2xl border border-gray-800/50 backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(109, 14, 16, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl text-gray-200 font-medium italic my-4">
                  From the heart of Morocco to your hands, every alfidah piece carries the soul of traditional craftsmanship merged with contemporary elegance.
                </p>
                <motion.div 
                  className="absolute top-4 left-4 text-6xl text-gray-700/30 font-serif"
                  initial={{ opacity: 0, scale: 2 }}
                  whileInView={{ opacity: 0.3, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  "
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Refined Stats Section */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-4">
              Excellence in <span style={{color: '#6d0e10'}}>Numbers</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our commitment to quality and craftsmanship is reflected in every metric that matters
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={fadeInUp}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Subtle glow effect */}
                  <motion.div 
                    className="absolute -inset-0.5 bg-gray-800 rounded-2xl blur opacity-0"
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Main card */}
                  <motion.div 
                    className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 h-full"
                    whileHover={{ 
                      borderColor: 'rgb(55, 65, 81)',
                      scale: 1.02
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    
                    {/* Icon */}
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700"
                        whileHover={{ 
                          borderColor: 'rgb(75, 85, 99)',
                          backgroundColor: 'rgb(31, 41, 55)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent size={24} className="text-white" />
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Number */}
                    <motion.div 
                      className="text-5xl font-bold text-white mb-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.number}
                    </motion.div>

                    {/* Label */}
                    <motion.h4 
                      className="text-xl font-semibold text-white mb-3"
                      whileHover={{ color: 'rgb(229, 231, 235)' }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.label}
                    </motion.h4>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-400 text-sm leading-relaxed"
                      whileHover={{ color: 'rgb(209, 213, 219)' }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.description}
                    </motion.p>

                    {/* Hover indicator */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                      style={{backgroundColor: '#6d0e10'}}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Refined hover effect */}
                  {hoveredStat === index && (
                    <motion.div 
                      className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                      style={{backgroundColor: '#6d0e10'}}
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom accent line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default About;