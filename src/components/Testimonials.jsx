import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const testimonialsRef = useRef(null);
  const statsRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const headerInView = useInView(headerRef, { once: false, margin: "-50px" });
  const testimonialsInView = useInView(testimonialsRef, { once: false, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: false, margin: "-50px" });
  
  const controls = useAnimation();
  const headerControls = useAnimation();
  const statsControls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [showBackground, setShowBackground] = useState(false);


  // Auto-slide testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Animation controls based on scroll
  useEffect(() => {
  if (isInView) {
    controls.start("visible");
    setShowBackground(true);
  } else {
    controls.start("hidden");
    setShowBackground(false);
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
    if (statsInView) {
      statsControls.start("visible");
    } else {
      statsControls.start("hidden");
    }
  }, [statsInView, statsControls]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Designer",
      location: "New York",
      content: "The craftsmanship is absolutely extraordinary. Each piece tells a story and the attention to detail is unmatched. I've never owned jewelry this beautiful.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "Art Curator",
      location: "Barcelona",
      content: "These pieces are not just jewelry, they're wearable art. The quality exceeds expectations and the designs are timeless. Truly exceptional work.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Luxury Consultant",
      location: "London",
      content: "I've been collecting fine jewelry for years, and this brand stands out. The elegance and sophistication in every piece is remarkable. Highly recommended.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Amelia Chen",
      role: "Interior Designer",
      location: "Tokyo",
      content: "Perfect balance of modern design and classic elegance. The quality is outstanding and the customer service is exceptional. Worth every penny.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: 1, 
          rotate: 0,
          color: index < rating ? '#facc15' : '#4b5563'
        }}
        transition={{ 
          delay: index * 0.1,
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        <Star
          size={16}
          className={`${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'} transition-all duration-300`}
        />
      </motion.div>
    ));
  };

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

  const backgroundVariants = {
    animate: {
      x: [0, 20, -20, 0],
      y: [0, -20, 20, 0],
      scale: [1, 1.05, 0.95, 1],
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      id="testimonials" 
      className="relative min-h-screen bg-black bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden py-24"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      
      {/* Animated Background Elements */}
      {showBackground && (
  <div className="absolute inset-0">
    <motion.div 
      className="absolute w-[600px] h-[600px] bg-gradient-to-r from-red-900/8 via-red-800/4 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
      variants={backgroundVariants}
      animate="animate"
      style={{
        left: '5%',
        top: '10%'
      }}
    />
    <motion.div 
      className="absolute w-[400px] h-[400px] bg-gradient-to-l from-white/2 via-gray-500/1 to-transparent rounded-full mix-blend-screen filter blur-3xl"
      variants={backgroundVariants}
      animate="animate"
      style={{
        right: '10%',
        bottom: '15%',
        animationDelay: '10s'
      }}
    />
  </div>
)}

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        
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
              className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gray-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: headerInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Quote size={24} className="text-[#6d0e10]" />
            </motion.div>
            <motion.div 
              className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gray-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: headerInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-[0.2em] uppercase"
            variants={itemVariants}
          >
            What Our{' '}
            <motion.span 
              className="bg-gradient-to-r from-[#6d0e10] to-red-600 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Clients Say
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
            variants={itemVariants}
          >
            Discover why our customers choose us for their most precious moments
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div 
          ref={testimonialsRef}
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: testimonialsInView ? 1 : 0,
            scale: testimonialsInView ? 1 : 0.9
          }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          
          {/* Navigation Arrows */}
          <motion.button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 -translate-x-8 border border-white/10 hover:border-white/20"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: testimonialsInView ? 1 : 0, x: testimonialsInView ? -32 : -50 }}
            transition={{ delay: 0.3 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 translate-x-8 border border-white/10 hover:border-white/20"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: testimonialsInView ? 1 : 0, x: testimonialsInView ? 32 : 50 }}
            transition={{ delay: 0.3 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Testimonials Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="w-full px-4"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
              >
                {/* Testimonial Card */}
                <motion.div 
                  className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 text-center"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    borderColor: "rgba(109, 14, 16, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  
                  {/* Quote Icon */}
                  <motion.div 
                    className="flex justify-center mb-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#6d0e10]/20 to-red-600/20 rounded-full flex items-center justify-center border border-[#6d0e10]/30">
                      <Quote size={28} className="text-[#6d0e10]" />
                    </div>
                  </motion.div>

                  {/* Rating */}
                  <motion.div 
                    className="flex justify-center space-x-1 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {renderStars(testimonials[currentIndex].rating)}
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.blockquote 
                    className="text-2xl lg:text-3xl font-light text-white leading-relaxed mb-10 italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.blockquote>

                  {/* Customer Info */}
                  <motion.div 
                    className="flex items-center justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6d0e10]/20 to-transparent"></div>
                    </motion.div>
                    <div className="text-left">
                      <h4 className="text-xl font-medium text-white tracking-wide">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-400 font-light">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-500 text-sm font-light">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center space-x-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: testimonialsInView ? 1 : 0,
            y: testimonialsInView ? 0 : 20 
          }}
          transition={{ delay: 0.6 }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-[#6d0e10] rounded-full' 
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-500 rounded-full'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
                backgroundColor: index === currentIndex ? '#6d0e10' : '#4b5563'
              }}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-3 gap-8 mt-20"
          variants={statsVariants}
          initial="hidden"
          animate={statsControls}
        >
          
          <motion.div 
            className="text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div 
              className="text-4xl lg:text-5xl font-light text-white mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: statsInView ? 1 : 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <span className="bg-gradient-to-r from-[#6d0e10] to-red-600 bg-clip-text text-transparent">
                200+
              </span>
            </motion.div>
            <p className="text-gray-400 font-light tracking-wide uppercase text-sm">
              Happy Customers
            </p>
          </motion.div>

          <motion.div 
            className="text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div 
              className="text-4xl lg:text-5xl font-light text-white mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: statsInView ? 1 : 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <span className="bg-gradient-to-r from-[#6d0e10] to-red-600 bg-clip-text text-transparent">
                4.9
              </span>
            </motion.div>
            <p className="text-gray-400 font-light tracking-wide uppercase text-sm">
              Average Rating
            </p>
          </motion.div>

          <motion.div 
            className="text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div 
              className="text-4xl lg:text-5xl font-light text-white mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: statsInView ? 1 : 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <span className="bg-gradient-to-r from-[#6d0e10] to-red-600 bg-clip-text text-transparent">
                50+
              </span>
            </motion.div>
            <p className="text-gray-400 font-light tracking-wide uppercase text-sm">
              Countries Served
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom accent */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6d0e10]/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </motion.div>
  );
};

export default Testimonials;