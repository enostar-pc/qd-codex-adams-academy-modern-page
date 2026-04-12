import React from 'react';
import { UilPresentation, UilUsersAlt, UilChartLine, UilUser } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: 'Experienced Faculty',
    description: 'Learn from highly qualified educators with years of experience in guiding students to top percentiles.',
    icon: UilPresentation,
    color: 'bg-white text-[#E60000] border border-gray-100'
  },
  {
    id: 2,
    title: 'Small Batch Size',
    description: 'We ensure a low student-to-teacher ratio so that every student gets the attention they deserve.',
    icon: UilUsersAlt,
    color: 'bg-white text-[#E60000] border border-gray-100'
  },
  {
    id: 3,
    title: 'Weekly Tests',
    description: 'Regular assessments and progress tracking to identify strengths and areas for improvement.',
    icon: UilChartLine,
    color: 'bg-white text-[#E60000] border border-gray-100'
  },
  {
    id: 4,
    title: 'Personal Mentorship',
    description: 'One-on-one guidance to help students manage stress, plan their studies, and achieve their goals.',
    icon: UilUser,
    color: 'bg-white text-[#E60000] border border-gray-100'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-[#fafafa] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[#E60000] font-bold tracking-widest uppercase text-sm mb-2">Why We Stand Out</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">Everything you need to excel</h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-8 rounded-none bg-white shadow-sm hover:shadow-md transition-all duration-300 group border-t-2 border-transparent hover:border-[#E60000]"
            >
              <div className={`w-14 h-14 rounded-none flex items-center justify-center text-2xl mb-6 ${feature.color} transition-transform duration-300`}>
                <feature.icon size="28" />
              </div>
              <h4 className="text-lg font-bold text-black mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
