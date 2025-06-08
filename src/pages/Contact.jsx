import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-red-900/30 to-red-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-red-800/25 to-red-900/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className={`text-center mb-16 transition-all mt-20 duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-thin mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 font-light">Exquisite Jewelry • Timeless Elegance</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl font-light mb-8 text-white">Get in Touch</h2>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              Experience the artistry of fine jewelry. Our master craftsmen await to create your perfect piece, 
              tailored to your unique vision and desires.
            </p>

            <div className="space-y-8">
              {/* Contact Items */}
              <div className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-2">
                <div className="w-14 h-14 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-900/50">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white text-lg font-light">contact@fidahjewelry.com</p>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-2">
                <div className="w-14 h-14 bg-gradient-to-br from-red-800 to-red-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-800/50">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white text-lg font-light">+212 676-101074</p>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-2">
                <div className="w-14 h-14 bg-gradient-to-br from-red-700 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-700/50">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white text-lg font-light">Rabat, Morocco</p>
                </div>
              </div>

              {/* <div className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-2">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-600/50">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Hours</p>
                  <p className="text-white text-lg font-light">Mon-Sat: 10AM-7PM</p>
                </div>
              </div> */}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <p className="text-gray-400 mb-6 text-lg">Follow Our Journey</p>
              <div className="flex space-x-4">
                {[Instagram, Facebook, Twitter].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-full flex items-center justify-center hover:from-red-800/60 hover:to-red-700/60 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-red-800/30 hover:border-red-700/50 shadow-lg shadow-red-900/25"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-800/30 transition-all duration-300 shadow-2xl shadow-red-900/10">
              <h3 className="text-3xl font-light mb-8 text-white">Send us a Message</h3>
              
              <div className="space-y-6">
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-700 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30 focus:shadow-lg focus:shadow-red-900/20"
                  />
                </div>

                <div className="group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-700 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30 focus:shadow-lg focus:shadow-red-900/20"
                  />
                </div>

                <div className="group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your dream piece..."
                    rows="6"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-700 focus:bg-white/10 transition-all duration-300 resize-none group-hover:border-white/30 focus:shadow-lg focus:shadow-red-900/20"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/40 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-900/30"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;