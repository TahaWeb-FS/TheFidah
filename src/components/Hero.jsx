import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&h=1080&fit=crop&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: 'New', label: 'Fresh Designs' },
    { value: 'Premium', label: 'Quality Materials' },
    { value: 'Unique', label: 'Handpicked Pieces' }
  ];

  // Scroll to featured products with enhanced animation
  const scrollToFeatured = () => {
    const featuredSection = document.getElementById('products');
    if (featuredSection) {
      const startPosition = window.pageYOffset;
      const targetPosition = featuredSection.offsetTop - 80;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let start = null;

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  // Navigate to contact
  const goToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      x: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const statItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)"
    },
    center: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(5px)",
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide]}
              alt={`Jewelry ${currentSlide + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Animated Overlays */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" 
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-6 sm:space-y-8 lg:space-y-10 max-w-5xl mx-auto"
          >
            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-4">
              <motion.h1 
                variants={titleVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight text-white"
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Exquisite
                </motion.span>{' '}
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Jewelry
                </motion.span>
                <motion.span 
                  variants={subtitleVariants}
                  className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-2 sm:mt-4 font-light text-white/80"
                >
                  Collection
                </motion.span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4"
            >
              Discover our carefully curated collection of premium chains, diamond bracelets, and luxury accessories crafted with precision and passion.
            </motion.p>

            {/* Stats - Hidden on small screens, visible from md up */}
            <motion.div 
              variants={statsVariants}
              className="hidden md:flex justify-center gap-8 lg:gap-12 xl:gap-16"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={statItemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  className="cursor-default text-center"
                >
                  <motion.div 
                    className="text-xl lg:text-2xl xl:text-3xl font-bold" 
                    style={{ color: '#6d0e10' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs lg:text-sm text-white/60 mt-1 lg:mt-2 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6"
            >
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={scrollToFeatured}
                className="group font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-300 hover:shadow-2xl flex items-center gap-2 justify-center relative overflow-hidden w-full sm:w-auto" 
                style={{ backgroundColor: '#6d0e10', color: 'white' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Explore Collection</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </motion.button>

              <motion.button 
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  backgroundColor: '#6d0e10' + '20',
                  transition: { duration: 0.2 }
                }}
                whileTap="tap"
                onClick={goToContact}
                className="group border-2 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-300 relative overflow-hidden w-full sm:w-auto" 
                style={{ borderColor: '#6d0e10' }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: '#6d0e10' }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ 
                    scale: 1, 
                    opacity: 0.1,
                    transition: { duration: 0.3 }
                  }}
                />
                <span className="relative z-10">Contact Us</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators - Hidden on mobile (sm and below), visible from md up */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="hidden md:flex absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 gap-3 z-20"
      >
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            style={index === currentSlide ? { backgroundColor: '#6d0e10' } : {}}
          >
            {index === currentSlide && (
              <motion.div
                layoutId="activeIndicator"
                className="w-full h-full rounded-full"
                style={{ backgroundColor: '#6d0e10' }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Scroll Indicator - Hidden on mobile, visible from lg up */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="flex absolute bottom-6 xl:bottom-8 right-6 xl:right-8 flex-col items-center gap-2 text-white/60"
      >
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-xs xl:text-sm uppercase tracking-wider rotate-90 origin-center transform translate-y-6"
        >
          Scroll
        </motion.div>
        <motion.div 
          animate={{ 
            height: [48, 60, 48],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-px bg-gradient-to-b from-rose-300 to-transparent"
        />
      </motion.div>

      {/* Mobile Slide Indicators - Alternative position for small screens */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="hidden md:flex absolute top-4 right-4 gap-2 z-20"
      >
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            style={index === currentSlide ? { backgroundColor: '#6d0e10' } : {}}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;