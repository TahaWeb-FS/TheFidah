import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <About />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
};

export default Home;