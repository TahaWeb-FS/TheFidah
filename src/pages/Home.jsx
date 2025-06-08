import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <About />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;