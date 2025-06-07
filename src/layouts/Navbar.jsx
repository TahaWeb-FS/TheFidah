import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About us', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', route: '/contact' }
  ];

  const smoothScrollTo = (element) => {
    setIsScrolling(true);
    
    // Add a subtle loading animation to the navbar during scroll
    const navbar = document.querySelector('nav');
    if (navbar) {
      navbar.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    // Enhanced smooth scroll with custom easing
    const targetPosition = element.offsetTop - 80; // Account for navbar height
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) * 0.8, 1200); // Dynamic duration based on distance
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Custom easing function for smoother animation
      const easeInOutCubic = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
        // Reset navbar transition
        if (navbar) {
          navbar.style.transition = 'all 0.7s ease';
        }
      }
    };

    requestAnimationFrame(animation);
  };

  const handleNavigation = (item) => {
    setIsMenuOpen(false);
    
    if (item.route) {
      // Navigate to separate route (Contact page)
      navigate(item.route);
    } else {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll with animation
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            smoothScrollTo(element);
          }
        }, 100);
      } else {
        // We're on home page, scroll to section with animation
        const element = document.getElementById(item.id);
        if (element) {
          smoothScrollTo(element);
        }
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrollY > 50
          ? 'bg-black shadow-2xl'
          : 'bg-transparent'
      } ${isScrolling ? 'backdrop-blur-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center group cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="FIDAH Logo"
                  className={`w-20 h-20 object-contain object-left transition-all duration-500 group-hover:scale-105 filter brightness-0 invert ${
                    isScrolling ? 'animate-pulse' : ''
                  }`}
                />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6d0e10]/90 to-[#6d0e10] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-12">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`relative text-white/90 hover:text-[#6d0e10]/90 transition-all duration-300 font-medium group py-2 text-sm uppercase tracking-wider bg-transparent border-none cursor-pointer transform hover:scale-105 ${
                    isScrolling ? 'pointer-events-none opacity-75' : ''
                  }`}
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6d0e10]/90 to-[#6d0e10] group-hover:w-full transition-all duration-300"></div>
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-md bg-[#6d0e10]/90/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <Search className="w-5 h-5 text-white/80 hover:text-[#6d0e10]/90 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12" />
              <User className="w-5 h-5 text-white/80 hover:text-[#6d0e10]/90 cursor-pointer transition-all duration-300 hover:scale-110" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-white/80 hover:text-[#6d0e10]/90 cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-12" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#6d0e10] text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">0</span>
              </div>
              <Menu
                className="w-6 h-6 lg:hidden text-white/80 hover:text-[#6d0e10]/90 cursor-pointer transition-all duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(true)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fade-in">
          <div className="bg-[#6d0e10]/98 backdrop-blur-xl h-full">
            <div className="flex justify-between items-center p-6 border-b border-[#6d0e10]/90/20">
              <h1 
                className="text-2xl font-bold text-white tracking-wider cursor-pointer hover:text-[#6d0e10]/90 transition-colors duration-300"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/');
                }}
              >
                FIDAH
              </h1>
              <X className="w-7 h-7 text-white/80 cursor-pointer hover:text-[#6d0e10]/90 transition-all duration-300 hover:rotate-90" onClick={() => setIsMenuOpen(false)} />
            </div>
            <div className="flex flex-col space-y-8 p-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="text-xl text-white/90 hover:text-[#6d0e10]/90 transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 uppercase tracking-wider text-left bg-transparent border-none cursor-pointer animate-slide-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {item.name}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-[#6d0e10]/90 to-[#6d0e10] hover:w-full transition-all duration-300 mt-1"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Add these CSS animations to your global CSS file or styled-components */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Smooth scroll behavior for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar styling for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f472b6, #f43f5e);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ec4899, #e11d48);
        }
      `}</style>
    </>
  );
};

export default Navbar;