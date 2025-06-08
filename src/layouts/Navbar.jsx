import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

  const leftMenuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About us', id: 'about' },
    { name: 'Products', id: 'products' }
  ];

  const rightMenuItems = [
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', route: '/contact' }
  ];

  const allMenuItems = [...leftMenuItems, ...rightMenuItems];

  const smoothScrollTo = (element) => {
    setIsScrolling(true);
    
    const navbar = document.querySelector('nav');
    if (navbar) {
      navbar.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    const targetPosition = element ? element.offsetTop - 90 : 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) * 0.8, 1200);
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easeInOutCubic = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
        if (navbar) {
          navbar.style.transition = 'all 0.7s ease';
        }
      }
    };

    requestAnimationFrame(animation);
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home
      navigate('/');
    } else {
      // If already on home page, scroll to top
      smoothScrollTo(null); // Pass null to scroll to top
    }
  };

  const handleNavigation = (item) => {
    setIsMenuOpen(false);
    
    if (item.route) {
      navigate(item.route);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            smoothScrollTo(element);
          }
        }, 100);
      } else {
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
          ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-white/10'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24 lg:h-28">
            {/* Left Menu Items - Desktop */}
            <div className="hidden lg:flex items-center space-x-20">
              {leftMenuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`relative text-white/80 hover:text-white transition-all duration-500 font-light group py-3 text-sm uppercase tracking-[0.2em] bg-transparent border-none cursor-pointer ${
                    isScrolling ? 'pointer-events-none opacity-50' : ''
                  }`}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 transform -translate-x-1/2"></div>
                </button>
              ))}
            </div>

            {/* Logo - Desktop Center, Mobile Left */}
            <div 
              className={`flex items-center justify-center group cursor-pointer ${
                // Desktop: absolute centered, Mobile: normal flex order
                'lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'
              }`}
              onClick={handleLogoClick}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <img
                  src={logo}
                  alt="FIDAH Logo"
                  className={`w-16 h-16 lg:w-24 lg:h-24 object-contain transition-all duration-700 group-hover:scale-110 filter brightness-0 invert relative z-10 ${
                    isScrolling ? 'animate-pulse' : ''
                  }`}
                />
              </div>
            </div>

            {/* Right Menu Items - Desktop */}
            <div className="hidden lg:flex items-center space-x-20">
              {rightMenuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`relative text-white/80 hover:text-white transition-all duration-500 font-light group py-3 text-sm uppercase tracking-[0.2em] bg-transparent border-none cursor-pointer ${
                    isScrolling ? 'pointer-events-none opacity-50' : ''
                  }`}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 transform -translate-x-1/2"></div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Menu
                className="w-6 h-6 text-white/70 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(true)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="bg-black/98 backdrop-blur-xl h-full animate-fade-in">
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div 
                className="flex items-center cursor-pointer group"
                onClick={handleLogoClick}
              >
                <img
                  src={logo}
                  alt="FIDAH Logo"
                  className="w-12 h-12 object-contain filter brightness-0 invert transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <X 
                className="w-7 h-7 text-white/70 cursor-pointer hover:text-white transition-all duration-300 hover:rotate-90" 
                onClick={() => setIsMenuOpen(false)} 
              />
            </div>
            <div className="flex flex-col items-center justify-center h-full space-y-16 pb-32">
              {allMenuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="text-2xl text-white/80 hover:text-white transition-all duration-500 font-light transform hover:scale-105 uppercase tracking-[0.3em] text-center bg-transparent border-none cursor-pointer animate-slide-in relative group"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {item.name}
                  <div className="absolute -bottom-2 left-1/2 w-0 h-px bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 transform -translate-x-1/2"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-slide-in {
  animation: slide-in 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

html {
  scroll-behavior: smooth;
}

/* Modern Dark Scrollbar with Red Accents */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 15, 15, 0.8);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(
    135deg, 
    rgba(239, 68, 68, 0.8) 0%, 
    rgba(185, 28, 28, 0.9) 50%, 
    rgba(239, 68, 68, 0.8) 100%
  );
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    135deg, 
    rgba(239, 68, 68, 0.9) 0%, 
    rgba(185, 28, 28, 1) 50%, 
    rgba(239, 68, 68, 0.9) 100%
  );
}

::-webkit-scrollbar-corner {
  background: rgba(15, 15, 15, 0.8);
}

/* For Firefox */
html {
  scrollbar-width: thin;
  scrollbar-color: rgba(239, 68, 68, 0.8) rgba(15, 15, 15, 0.8);
}
      `}</style>
    </>
  );
};

export default Navbar;