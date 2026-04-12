import React from 'react';
import { UilCheckCircle } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center text-black text-sm font-bold tracking-widest uppercase border-b-2 border-[#E60000] pb-1"
            >
              <UilCheckCircle className="text-[#E60000] mr-2" size="18" />
              Since 2021 | Expert Faculty
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-tight tracking-tight">
              Shape Your Future with <span className="text-[#E60000]">Adams Academy</span>
            </h1>
            
            <p className="text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Expert Coaching for CBSE & Matriculation Students (Grade 6–12). Unlock your academic potential with personalized learning and top-tier mentorship.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <a href="#cta" className="text-white hover:text-white inline-block">
                <button className="px-8 py-3 bg-[#E60000] text-white font-bold tracking-wider rounded-none hover:bg-black transition-colors">
                  ENROLL NOW
                </button>
              </a>
              <a href="#courses" className="text-black font-semibold hover:text-[#E60000] hover:underline underline-offset-4 transition-all">
                VIEW COURSES &rarr;
              </a>
            </div>
          </motion.div>
          
          {/* Illustration */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 w-full max-w-lg lg:max-w-none mx-auto"
          >
            <img 
              src="/hero_illustration.png" 
              alt="Students studying at Adams Academy" 
              className="relative z-10 w-full h-auto rounded-none border border-gray-100"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
