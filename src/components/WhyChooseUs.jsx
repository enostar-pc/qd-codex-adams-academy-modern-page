import React from 'react';
import { UilCheckCircle } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

const reasons = [
  "Consistently High Success Rate",
  "Individual Attention & Doubt Clearing",
  "Extensive Mock Tests & Exam Prep",
  "Modern Smart Classrooms",
  "Regular Parent-Teacher Interaction"
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-[#fafafa] border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative w-full"
          >
            <div className="bg-black p-8 sm:p-12 relative text-white rounded-none shadow-xl shadow-gray-200">
              <h3 className="text-3xl font-extrabold tracking-tight mb-6 uppercase">Karungal's Premier Coaching Institute</h3>
              <p className="text-gray-300 text-sm mb-8 leading-relaxed font-light">
                At Adams Academy, we don't just teach; we inspire. Our holistic approach to education ensures that students are not only prepared for their board exams but also for their future careers.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-800">
                <div>
                  <div className="text-4xl font-extrabold text-[#E60000] mb-1">500+</div>
                  <div className="text-gray-400 text-xs font-bold tracking-widest uppercase">Students Mentored</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-[#E60000] mb-1">100%</div>
                  <div className="text-gray-400 text-xs font-bold tracking-widest uppercase">Pass Percentage</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="text-[#E60000] font-bold tracking-widest uppercase text-sm mb-2">Our Advantage</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 tracking-tight">Why Parents & Students Trust Us</h3>
            <p className="text-gray-600 mb-8 font-light text-sm leading-relaxed">
              We go beyond traditional teaching methods to provide a conducive learning environment that nurtures excellence.
            </p>
            
            <ul className="space-y-3">
              {reasons.map((reason, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center text-black font-semibold text-sm bg-white border border-gray-100 p-4 rounded-none shadow-sm hover:border-[#E60000] transition-colors"
                >
                  <UilCheckCircle className="text-[#E60000] mr-4 flex-shrink-0" size="20" />
                  {reason}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
