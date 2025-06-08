import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Star, Sparkles } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

const MoroccanFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const headerRef = useRef(null);
  const decorativeRef = useRef(null);
  
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isDecorativeInView = useInView(decorativeRef, { once: true, margin: "-50px" });

  // Listen for FAQ section navigation
  useEffect(() => {
    const handleNavClick = (event) => {
      // Check if the clicked element or its parent is a navbar link pointing to FAQ
      const target = event.target.closest('a[href*="#faq"]');
      if (target) {
        // Reset animations by incrementing the key
        setAnimationKey(prev => prev + 1);
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  const faqData = [
    {
      question: "What makes Fidah jewelry authentic Moroccan heritage?",
      answer: "Our Fidah collection represents centuries of Moroccan craftsmanship, featuring traditional techniques passed down through generations. Each piece is handcrafted using authentic Berber and Andalusian designs, incorporating symbolic patterns that tell stories of Morocco's rich cultural tapestry."
    },
    {
      question: "How do you ensure the quality of silver in your pieces?",
      answer: "We use only the finest 925 sterling silver, sourced from trusted Moroccan artisans. Each piece undergoes rigorous quality testing and is hallmarked to guarantee authenticity. Our silver is polished using traditional methods combined with modern techniques to ensure lasting brilliance."
    },
    {
      question: "Can you customize jewelry with traditional Moroccan motifs?",
      answer: "Absolutely! We specialize in creating bespoke pieces featuring traditional motifs like the Hand of Fatima, geometric zellige patterns, and Berber symbols. Our master craftsmen can incorporate personal elements while maintaining the authentic Moroccan aesthetic."
    },
    {
      question: "What is the significance of the patterns in Moroccan jewelry?",
      answer: "Each pattern carries deep cultural meaning - the eight-pointed star represents regeneration, geometric patterns symbolize unity and infinity, while floral motifs celebrate nature's beauty. These designs connect the wearer to Morocco's spiritual and artistic heritage."
    },
    {
      question: "How should I care for my Moroccan silver jewelry?",
      answer: "Store your pieces in a dry place, preferably in individual pouches. Clean gently with a soft cloth and mild soap. For intricate pieces with traditional engravings, use a soft brush. Avoid exposure to perfumes and lotions to maintain the silver's natural luster."
    },
    {
      question: "Do you offer international shipping for your collections?",
      answer: "Yes, we proudly ship our Moroccan treasures worldwide. Each piece is carefully packaged with traditional materials and comes with a certificate of authenticity. Shipping includes tracking and insurance to ensure your jewelry arrives safely."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const decorativeVariants = {
    hidden: { 
      opacity: 0, 
      rotate: 45,
      scale: 0
    },
    visible: { 
      opacity: 1, 
      rotate: 45,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.3
      }
    }
  };

  const FloatingFAQItem = ({ faq, index }) => {
    return (
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-red-500/20 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-red-500/20 rounded-tr-2xl" />
        
        {/* Question */}
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full p-8 text-left focus:outline-none group-hover:bg-gray-900/30 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-red-500 rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-red-200 transition-colors duration-300">
                {faq.question}
              </h3>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-red-500 transform group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-red-500 transform group-hover:scale-110 transition-all duration-300" />
                )}
              </div>
            </div>
          </div>
        </button>

        {/* Answer - No animation, direct show/hide */}
        {openIndex === index && (
          <div className="px-8 pb-8">
            <div className="ml-6 pl-4 border-l-2 border-red-500/30">
              <p className="text-gray-300 text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        )}

        {/* Decorative bottom corners */}
        <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-red-500/20 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-red-500/20 rounded-br-2xl" />
      </div>
    );
  };

  return (
    <div id='faq' className="min-h-screen bg-black p-8 mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          key={`header-${animationKey}`}
          ref={headerRef}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-16 relative"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-rose-600/20 blur-3xl rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative">
            <motion.div 
              className="flex justify-center items-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div 
                className="w-1 h-8 bg-gradient-to-b from-red-500 to-rose-600 mr-4"
                animate={{ scaleY: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <Star className="text-red-500 w-8 h-8 mr-2" />
              </motion.div>
              <motion.h1 
                className="text-5xl font-bold bg-gradient-to-r from-red-500 via-rose-500 to-red-400 bg-clip-text text-transparent"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isHeaderInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Fidah Heritage
              </motion.h1>
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="text-red-500 w-8 h-8 ml-2" />
              </motion.div>
              <motion.div 
                className="w-1 h-8 bg-gradient-to-b from-red-500 to-rose-600 ml-4"
                animate={{ scaleY: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Découvrez l'excellence de l'artisanat marocain à travers nos créations uniques
            </motion.p>
            <motion.div 
              className="mt-4 flex justify-center"
              initial={{ width: 0, opacity: 0 }}
              animate={isHeaderInView ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Pattern */}
        <motion.div 
          key={`decorative-${animationKey}`}
          ref={decorativeRef}
          className="flex justify-center mb-12"
          initial="hidden"
          animate={isDecorativeInView ? "visible" : "hidden"}
          variants={decorativeVariants}
        >
          <div className="relative">
            <motion.div 
              className="w-32 h-32 border-2 border-red-500/30 rotate-45 rounded-lg"
              animate={{
                rotate: [45, 50, 40, 45],
                borderColor: ["rgba(239, 68, 68, 0.3)", "rgba(239, 68, 68, 0.6)", "rgba(239, 68, 68, 0.3)"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute inset-4 border-2 border-rose-500/40 rotate-45 rounded-lg"
              animate={{
                rotate: [45, 40, 50, 45],
                scale: [1, 1.05, 0.95, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div 
              className="absolute inset-8 border-2 border-red-400/50 rotate-45 rounded-lg"
              animate={{
                rotate: [45, 50, 40, 45],
                scale: [1, 0.95, 1.05, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 0 0 rgba(239, 68, 68, 0.4)", 
                  "0 0 0 10px rgba(239, 68, 68, 0)", 
                  "0 0 0 0 rgba(239, 68, 68, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          key={`container-${animationKey}`}
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqData.map((faq, index) => (
            <FloatingFAQItem key={`${index}-${animationKey}`} faq={faq} index={index} />
          ))}
        </motion.div>

        {/* Footer decorative element */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <motion.div 
            className="inline-flex items-center space-x-4 text-red-500/60"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-8 h-px bg-gradient-to-r from-transparent to-red-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <span className="text-sm font-medium tracking-wider">تراث مغربي أصيل</span>
            <motion.div 
              className="w-8 h-px bg-gradient-to-l from-transparent to-red-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MoroccanFAQ;