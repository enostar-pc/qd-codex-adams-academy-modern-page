import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" className="relative py-24 bg-black overflow-hidden border-t-4 border-[#E60000]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
          Start Your Learning Journey Today!
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Join Adams Academy and take the first step towards academic excellence. Limited seats available for the upcoming academic year.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-[#E60000] text-white text-md font-bold tracking-widest uppercase rounded-none hover:bg-white hover:text-[#E60000] transition-colors"
        >
          Join Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTA;
