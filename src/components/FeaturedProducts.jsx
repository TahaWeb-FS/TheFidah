import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ShoppingBag, Eye, Heart } from 'lucide-react';
import bracelet from '../assets/bracelet.png'
import bracelet2 from '../assets/bracelet2.png'
import chain from '../assets/chain.png'

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Add your WhatsApp number here
  const whatsappNumber = "+212676101074"; // Replace with your actual WhatsApp number

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleBuyNow = (product) => {
    const message = `Hi! I'm interested in buying the ${product.name} for ${product.price}. Can you help me with the purchase?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    {
      id: 1,
      name: "Life Bracelet",
      price: "199 DHS",
      originalPrice: "229 DHS",
      image: bracelet,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Eye of GOD Bracelet",
      price: "229 DHS",
      originalPrice: "269 DHS",
      image: bracelet2,
      badge: "New"
    },
    {
      id: 3,
      name: "Eye of GOD Chain ",
      price: "249 DHS",
      originalPrice: "289 DHS",
      image: chain,
      badge: "Premium"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div id="products" className="relative min-h-screen bg-black overflow-hidden py-20" ref={ref}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute w-96 h-96 bg-white/3 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{
            left: '20%',
            top: '10%'
          }}
          variants={glowVariants}
          initial="animate"
          
        />
        <motion.div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 15 }}
          style={{
            right: '20%',
            bottom: '20%'
          }}
          variants={glowVariants}
          initial="animate"
        />
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={headerVariants}
        >
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="w-12 h-0.5 bg-gray-700"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#6d0e10]"
              initial={{ scale: 0, rotate: 0 }}
              animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
            <motion.div 
              className="w-12 h-0.5 bg-gray-700"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Featured <motion.span 
              className="text-[#6d0e10]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Collection
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Handcrafted jewelry pieces that define elegance and luxury
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16"
          variants={containerVariants}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card - This is now the main container that triggers hover */}
              <div className="relative bg-black overflow-hidden rounded-2xl">
                
                {/* Image Container */}
                <motion.div 
                  className="relative aspect-square bg-black overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Badge */}
                  <motion.div 
                    className="absolute top-4 left-4 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  >
                    <motion.div 
                      className="px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm"
                      style={{
                        backgroundColor: product.badge === 'New' ? '#6d0e10' : 
                                       product.badge === 'Premium' ? '#1f2937' : '#374151'
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {product.badge}
                    </motion.div>
                  </motion.div>

                  {/* Wishlist Button */}
                  <motion.button 
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1,
                      backgroundColor: "rgba(109, 14, 16, 0.8)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Heart size={16} className="text-white" />
                  </motion.button>
                </motion.div>

                {/* Buy Now Overlay - Now covers the entire card */}
                <motion.div 
                  className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: hoveredProduct === index ? 'auto' : 'none' }}
                >
                  <motion.div 
                    className="text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredProduct === index ? 0 : 20, 
                      opacity: hoveredProduct === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <motion.button 
                      className="px-8 py-3 bg-[#6d0e10] text-white font-medium rounded-full hover:bg-[#8b1114] transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => handleBuyNow(product)}
                    >
                      Buy Now
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Product Info */}
                <motion.div 
                  className="pt-6 bg-black px-4 pb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                >
                  
                  {/* Product Name */}
                  <motion.h3 
                    className="text-xl font-medium text-white mb-3 text-center group-hover:text-gray-300 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.name}
                  </motion.h3>

                  {/* Pricing */}
                  <div className="text-center">
                    <motion.div 
                      className="flex items-center justify-center space-x-3 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    >
                      <motion.span 
                        className="text-2xl font-bold text-[#6d0e10]"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {product.price}
                      </motion.span>
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    </motion.div>
                    <motion.div 
                      className="text-xs text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                    >
                      Save ${parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products Button */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button 
            className="group px-12 py-4 bg-transparent font-medium text-white hover:text-gray-300 transition-all duration-300 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="flex items-center space-x-3"
              variants={floatingVariants}
              animate="animate"
            >
              <span className="text-lg">View All Products</span>
              <motion.div 
                className="w-6 h-0.5 bg-current"
                whileHover={{ width: 32 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#6d0e10]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom accent */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;